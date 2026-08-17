import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { longScenes, longStart, type LongChoice, type LongPage } from '@/storyPages';
import { useColors } from '@/hooks/useColors';

const SAVE_KEY = 'haunted-hallway-mobile-save-v1';
const SETTINGS_KEY = 'haunted-hallway-mobile-settings-v1';

type Panel = 'profile' | 'map' | 'settings' | 'pause' | null;
type TextSize = 'normal' | 'large' | 'xl';
type Stats = { laughs: number; nerve: number; wit: number; chaos: number; choices: number; pagesRead: number };
type Run = { playerName: string; currentId: string; history: string[]; inventory: string[]; stats: Stats; startedAt: string; updatedAt: string };
type Settings = { reducedMotion: boolean; highContrast: boolean; textSize: TextSize; choiceHints: boolean };

const DEFAULT_SETTINGS: Settings = { reducedMotion: false, highContrast: false, textSize: 'normal', choiceHints: true };
const rooms = [
  ['01', 'The locker corridor', 'Metallic gossip with a pulse.'],
  ['02', 'The fog classroom', 'Attendance has become supernatural.'],
  ['03', 'The cafeteria', 'The pudding knows your secrets.'],
  ['04', 'The gym portal', 'The fight song is one kazoo.'],
  ['05', 'The science fair', 'The potato has opinions.'],
  ['06', 'The upside-down office', 'Administrative gravity failed.'],
  ['07', 'The yearbook room', 'The photographs blink first.'],
  ['08', 'The clock tower', 'The final bell is impatient.'],
] as const;

function createRun(playerName: string): Run {
  const now = new Date().toISOString();
  return {
    playerName: playerName.trim() || 'Brave-ish Reader',
    currentId: 'long-start',
    history: [],
    inventory: [],
    stats: { laughs: 0, nerve: 0, wit: 0, chaos: 0, choices: 0, pagesRead: 1 },
    startedAt: now,
    updatedAt: now,
  };
}

function getPage(id: string): LongPage {
  return id === 'long-start' ? longStart : longScenes[id] ?? longStart;
}

function roomIndex(pageNumber: number) {
  return Math.min(7, Math.max(0, Math.floor((pageNumber - 1) / 40)));
}

function tap() {
  Haptics.selectionAsync().catch(() => undefined);
}

function impact() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => undefined);
}

function achievements(run: Run) {
  return [
    { id: 'first', title: 'First step into nonsense', detail: 'Make your first choice.', unlocked: run.stats.choices >= 1, icon: 'walk-outline' as const },
    { id: 'collector', title: 'Pocket full of problems', detail: 'Find three story items.', unlocked: run.inventory.length >= 3, icon: 'briefcase-outline' as const },
    { id: 'halfway', title: 'Still alive-ish', detail: 'Reach page 160.', unlocked: run.stats.pagesRead >= 160, icon: 'flag-outline' as const },
    { id: 'long-haul', title: 'The long way home', detail: 'Reach the final bell.', unlocked: run.stats.pagesRead >= 320, icon: 'trophy-outline' as const },
  ];
}

export default function StoryHome() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [loaded, setLoaded] = useState(false);
  const [savedRun, setSavedRun] = useState<Run | null>(null);
  const [run, setRun] = useState<Run | null>(null);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [panel, setPanel] = useState<Panel>(null);
  const [name, setName] = useState('');
  const [choosing, setChoosing] = useState(false);

  useEffect(() => {
    Promise.all([AsyncStorage.getItem(SAVE_KEY), AsyncStorage.getItem(SETTINGS_KEY)])
      .then(([saved, storedSettings]) => {
        if (saved) {
          try {
            setSavedRun(JSON.parse(saved) as Run);
          } catch {
            setSavedRun(null);
          }
        }
        if (storedSettings) {
          try {
            setSettings({ ...DEFAULT_SETTINGS, ...(JSON.parse(storedSettings) as Partial<Settings>) });
          } catch {
            setSettings(DEFAULT_SETTINGS);
          }
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded && run) AsyncStorage.setItem(SAVE_KEY, JSON.stringify(run)).then(() => setSavedRun(run)).catch(() => undefined);
  }, [loaded, run]);

  useEffect(() => {
    if (loaded) AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)).catch(() => undefined);
  }, [loaded, settings]);

  const page = useMemo(() => (run ? getPage(run.currentId) : longStart), [run]);
  const startNew = () => {
    impact();
    setRun(createRun(name));
    setPanel(null);
  };
  const resume = () => {
    if (savedRun) {
      tap();
      setRun(savedRun);
    }
  };

  if (!loaded) {
    return <View style={[styles.loading, { backgroundColor: colors.background }]}><ActivityIndicator size="large" color={colors.accent} /><Text style={[styles.loadingText, { color: colors.mutedForeground }]}>Dusting off the book…</Text></View>;
  }
  if (!run) {
    return <Welcome colors={colors} name={name} setName={setName} hasSaved={!!savedRun} onStart={startNew} onResume={resume} />;
  }

  const room = rooms[roomIndex(page.pageNumber)];
  const progress = Math.round(((page.pageNumber - 1) / 319) * 100);

  const choose = (choice: LongChoice) => {
    if (choosing) return;
    setChoosing(true);
    impact();
    setRun((current) => {
      if (!current) return current;
      const nextPage = getPage(choice.next);
      const stats = { ...current.stats, choices: current.stats.choices + 1, pagesRead: Math.max(current.stats.pagesRead, nextPage.pageNumber) };
      if (choice.tone === 'green') {
        stats.nerve += 2;
        stats.laughs += 1;
      } else if (choice.tone === 'coral') {
        stats.chaos += 2;
        stats.laughs += 2;
      } else {
        stats.wit += 2;
      }
      return {
        ...current,
        currentId: choice.next,
        history: [...current.history, current.currentId],
        inventory: choice.item && !current.inventory.includes(choice.item) ? [...current.inventory, choice.item] : current.inventory,
        stats,
        updatedAt: new Date().toISOString(),
      };
    });
    setTimeout(() => setChoosing(false), settings.reducedMotion ? 40 : 320);
  };

  const goBack = () => {
    if (!run.history.length || choosing) return;
    tap();
    setRun((current) => current && ({
      ...current,
      currentId: current.history[current.history.length - 1],
      history: current.history.slice(0, -1),
      updatedAt: new Date().toISOString(),
    }));
  };

  const restart = () => {
    setRun(createRun(run.playerName));
    setPanel(null);
    impact();
  };

  return (
    <View style={[styles.screen, { backgroundColor: settings.highContrast ? colors.card : colors.background }]}>
      <View style={{ paddingTop: Platform.OS === 'web' ? Math.max(insets.top, 67) : insets.top }}>
        <View style={styles.topbar}>
          <View style={styles.brandLockup}>
            <View style={[styles.brandMark, { backgroundColor: colors.accent }]}><Ionicons name="book" size={16} color={colors.card} /></View>
            <View><Text style={[styles.brandKicker, { color: colors.mutedForeground }]}>AN OFFLINE COMEDY NOVEL</Text><Text style={[styles.brandName, { color: colors.primary }]}>THE HAUNTED HALLWAY</Text></View>
          </View>
          <Pressable testID="pause-button" accessibilityLabel="Open pause menu" onPress={() => { tap(); setPanel('pause'); }} style={({ pressed }) => [styles.iconButton, { backgroundColor: colors.card, borderColor: colors.border }, pressed && styles.pressed]}><Ionicons name="pause" size={19} color={colors.primary} /></Pressable>
        </View>
        <View style={styles.progressWrap}><View style={[styles.progressTrack, { backgroundColor: colors.muted }]}><View style={[styles.progressFill, { backgroundColor: colors.secondary, width: (progress + '%') as `${number}%` }]} /></View><Text style={[styles.progressText, { color: colors.mutedForeground }]}>{page.pageNumber} / 320</Text></View>
      </View>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: Platform.OS === 'web' ? 34 : insets.bottom + 18 }]} showsVerticalScrollIndicator={false}>
        <Pressable testID="chapter-map-button" accessibilityLabel="Open room map" onPress={() => { tap(); setPanel('map'); }} style={({ pressed }) => [styles.eyebrowRow, pressed && styles.pressed]}><View style={[styles.liveDot, { backgroundColor: colors.secondary }]} /><Text style={[styles.eyebrow, { color: colors.accent }]}>{page.eyebrow}</Text><Ionicons name="map-outline" size={16} color={colors.accent} /></Pressable>
        <Text style={[styles.chapterName, { color: colors.primary }]}>{room[1]}</Text>
        <Text style={[styles.title, { color: colors.primary }, settings.textSize === 'large' && styles.titleLarge, settings.textSize === 'xl' && styles.titleXL]}>{page.title}</Text>
        <View style={[styles.rule, { backgroundColor: colors.border }]} />
        {page.body.map((paragraph) => <Text key={paragraph} style={[styles.body, { color: colors.foreground }, settings.textSize === 'large' && styles.bodyLarge, settings.textSize === 'xl' && styles.bodyXL]}>{paragraph}</Text>)}
        <View style={[styles.aside, { backgroundColor: colors.muted, borderLeftColor: colors.accent }]}><Ionicons name="pencil-outline" size={17} color={colors.accent} /><Text style={[styles.asideText, { color: colors.mutedForeground }]}>{page.aside}</Text></View>

        {page.ending ? <EndingCard colors={colors} page={page} onRestart={restart} /> : <View style={styles.choiceSection}><View style={styles.choiceHeader}><Text style={[styles.sectionKicker, { color: colors.mutedForeground }]}>WHAT DO YOU DO?</Text><Text style={[styles.hint, { color: colors.mutedForeground }]}>{settings.choiceHints ? 'Every choice leaves a footprint.' : 'Choose your route.'}</Text></View>{page.choices?.map((choice, index) => <ChoiceCard key={choice.label} choice={choice} index={index} colors={colors} disabled={choosing} showHint={settings.choiceHints} onPress={() => choose(choice)} />)}</View>}

        <View style={[styles.inventoryCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={styles.inventoryHeader}><View><Text style={[styles.sectionKicker, { color: colors.mutedForeground }]}>FOUND IN THE MARGINS</Text><Text style={[styles.inventoryTitle, { color: colors.primary }]}>{run.inventory.length ? run.inventory.length + ' curious object' + (run.inventory.length === 1 ? '' : 's') : 'Nothing suspicious yet'}</Text></View><Ionicons name="briefcase-outline" size={22} color={colors.accent} /></View>{run.inventory.length ? <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.inventoryList}>{run.inventory.map((item) => <View key={item} style={[styles.itemPill, { backgroundColor: colors.muted }]}><Ionicons name="sparkles-outline" size={13} color={colors.accent} /><Text style={[styles.itemText, { color: colors.foreground }]}>{item}</Text></View>)}</ScrollView> : <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Make a questionable decision to collect evidence.</Text>}</View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.card, borderTopColor: colors.border, paddingBottom: Platform.OS === 'web' ? 34 : insets.bottom + 8 }]}><Pressable testID="back-button" accessibilityLabel="Go back one page" disabled={!run.history.length || choosing} onPress={goBack} style={({ pressed }) => [styles.bottomAction, (!run.history.length || choosing) && styles.disabled, pressed && styles.pressed]}><Ionicons name="arrow-back" size={21} color={colors.primary} /><Text style={[styles.bottomActionText, { color: colors.primary }]}>Back</Text></Pressable><View style={styles.bottomCenter}><Text style={[styles.statsLine, { color: colors.mutedForeground }]}><Text style={{ color: colors.accent, fontWeight: '700' }}>{run.stats.laughs}</Text> laughs · <Text style={{ color: colors.primary, fontWeight: '700' }}>{run.stats.choices}</Text> choices</Text><Text style={[styles.saveLine, { color: colors.mutedForeground }]}>Saved on this device</Text></View><Pressable testID="profile-button" accessibilityLabel="Open reader profile" onPress={() => { tap(); setPanel('profile'); }} style={({ pressed }) => [styles.bottomAction, pressed && styles.pressed]}><Ionicons name="person-circle-outline" size={24} color={colors.primary} /><Text style={[styles.bottomActionText, { color: colors.primary }]}>Profile</Text></Pressable></View>

      <Panel visible={!!panel} panel={panel} colors={colors} onClose={() => setPanel(null)}><PanelContent panel={panel} colors={colors} run={run} settings={settings} setSettings={setSettings} onRestart={restart} onClose={() => setPanel(null)} onNewName={(nextName) => setRun((current) => current && ({ ...current, playerName: nextName.trim() || current.playerName, updatedAt: new Date().toISOString() }))} /></Panel>
    </View>
  );
}

function Welcome({ colors, name, setName, hasSaved, onStart, onResume }: { colors: ReturnType<typeof useColors>; name: string; setName: (value: string) => void; hasSaved: boolean; onStart: () => void; onResume: () => void }) {
  const insets = useSafeAreaInsets();
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={[styles.welcome, { backgroundColor: colors.background, paddingTop: Platform.OS === 'web' ? Math.max(insets.top, 67) : insets.top, paddingBottom: Platform.OS === 'web' ? 34 : insets.bottom + 20 }]}><View style={[styles.welcomeStamp, { borderColor: colors.accent }]}><Ionicons name="book-outline" size={32} color={colors.accent} /><Text style={[styles.stampText, { color: colors.accent }]}>OFFLINE EDITION</Text></View><Text style={[styles.welcomeKicker, { color: colors.mutedForeground }]}>A CHOOSE-YOUR-LAUGH ADVENTURE</Text><Text style={[styles.welcomeTitle, { color: colors.primary }]}>The Haunted{'\n'}Hallway of Doom</Text><Text style={[styles.welcomeCopy, { color: colors.foreground }]}>A paperback-sized comedy horror novel that fits in your pocket. 320 pages of doors, lockers, suspicious pudding, and decisions you will absolutely defend later.</Text><View style={[styles.nameCard, { backgroundColor: colors.card, borderColor: colors.border }]}><Text style={[styles.sectionKicker, { color: colors.mutedForeground }]}>READER NAME</Text><TextInput testID="reader-name" value={name} onChangeText={setName} placeholder="Brave-ish Reader" placeholderTextColor={colors.mutedForeground} style={[styles.nameInput, { color: colors.foreground, borderBottomColor: colors.border }]} autoCapitalize="words" /></View><PrimaryButton label={hasSaved ? 'Start a new run' : 'Open the book'} colors={colors} onPress={onStart} /><Pressable testID="resume-button" accessibilityLabel="Resume saved run" onPress={onResume} disabled={!hasSaved} style={({ pressed }) => [styles.resumeButton, { borderColor: colors.border, backgroundColor: colors.card }, !hasSaved && styles.disabled, pressed && styles.pressed]}><Ionicons name="bookmark-outline" size={18} color={colors.primary} /><Text style={[styles.resumeText, { color: colors.primary }]}>{hasSaved ? 'Resume saved run' : 'No saved run yet'}</Text></Pressable><Text style={[styles.offlineNote, { color: colors.mutedForeground }]}><Ionicons name="cloud-offline-outline" size={14} color={colors.mutedForeground} /> No account. No signal. No problem.</Text></KeyboardAvoidingView>;
}

function ChoiceCard({ choice, index, colors, disabled, showHint, onPress }: { choice: LongChoice; index: number; colors: ReturnType<typeof useColors>; disabled: boolean; showHint: boolean; onPress: () => void }) {
  const toneColor = choice.tone === 'coral' ? colors.accent : choice.tone === 'green' ? colors.secondary : colors.primary;
  return <Pressable testID={'choice-' + index} accessibilityRole="button" accessibilityLabel={choice.label} onPress={onPress} disabled={disabled} style={({ pressed }) => [styles.choiceCard, { backgroundColor: colors.card, borderColor: colors.border }, pressed && styles.choicePressed, disabled && styles.disabled]}><View style={[styles.choiceNumber, { backgroundColor: toneColor }]}><Text style={[styles.choiceNumberText, { color: choice.tone === 'green' ? colors.secondaryForeground : colors.card }]}>{String(index + 1).padStart(2, '0')}</Text></View><View style={styles.choiceCopy}><Text style={[styles.choiceLabel, { color: colors.primary }]}>{choice.label}</Text>{showHint && <Text style={[styles.choiceNote, { color: colors.mutedForeground }]}>{choice.note}</Text>}</View><Ionicons name="arrow-forward" size={20} color={toneColor} /></Pressable>;
}

function PrimaryButton({ label, colors, onPress }: { label: string; colors: ReturnType<typeof useColors>; onPress: () => void }) {
  return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.primary }, pressed && styles.pressed]}><Text style={[styles.primaryButtonText, { color: colors.card }]}>{label}</Text><Ionicons name="arrow-forward" size={19} color={colors.card} /></Pressable>;
}

function EndingCard({ colors, page, onRestart }: { colors: ReturnType<typeof useColors>; page: LongPage; onRestart: () => void }) {
  return <View style={[styles.endingCard, { backgroundColor: colors.primary }]}><View style={[styles.endingBadge, { backgroundColor: colors.secondary }]}><Text style={[styles.endingBadgeText, { color: colors.secondaryForeground }]}>{page.ending?.badge}</Text></View><Text style={[styles.endingTitle, { color: colors.card }]}>{page.ending?.title}</Text><Text style={[styles.endingCopy, { color: colors.card }]}>{page.ending?.copy}</Text><Pressable onPress={onRestart} style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.secondary }, pressed && styles.pressed]}><Text style={[styles.primaryButtonText, { color: colors.secondaryForeground }]}>Start another run</Text><Ionicons name="refresh" size={19} color={colors.secondaryForeground} /></Pressable></View>;
}

function Panel({ visible, panel, colors, onClose, children }: { visible: boolean; panel: Panel; colors: ReturnType<typeof useColors>; onClose: () => void; children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}><View style={[styles.modalBackdrop, { backgroundColor: colors.foreground + '55' }]}><Pressable style={styles.modalDismiss} onPress={onClose} accessibilityLabel="Close panel" /><View style={[styles.sheet, { backgroundColor: colors.background, paddingBottom: Math.max(insets.bottom, 14) }]}><View style={[styles.sheetHandle, { backgroundColor: colors.border }]} /><View style={styles.sheetHeader}><Text style={[styles.sheetTitle, { color: colors.primary }]}>{panel === 'profile' ? 'Reader profile' : panel === 'map' ? 'Room map' : panel === 'settings' ? 'Book settings' : 'Pause menu'}</Text><Pressable onPress={onClose} accessibilityLabel="Close" style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}><Ionicons name="close" size={22} color={colors.primary} /></Pressable></View>{children}</View></View></Modal>;
}

function PanelContent({ panel, colors, run, settings, setSettings, onRestart, onClose, onNewName }: { panel: Panel; colors: ReturnType<typeof useColors>; run: Run; settings: Settings; setSettings: React.Dispatch<React.SetStateAction<Settings>>; onRestart: () => void; onClose: () => void; onNewName: (name: string) => void }) {
  const [draftName, setDraftName] = useState(run.playerName);
  if (panel === 'profile') return <ScrollView contentContainerStyle={styles.panelContent}><View style={[styles.profileHero, { backgroundColor: colors.primary }]}><View style={[styles.profileAvatar, { backgroundColor: colors.secondary }]}><Text style={[styles.profileAvatarText, { color: colors.secondaryForeground }]}>{run.playerName.slice(0, 1).toUpperCase()}</Text></View><View><Text style={[styles.profileName, { color: colors.card }]}>{run.playerName}</Text><Text style={[styles.profileSub, { color: colors.muted }]}>{run.stats.pagesRead} pages wandered · {run.stats.choices} choices made</Text></View></View><Text style={[styles.sectionKicker, { color: colors.mutedForeground }]}>CALL YOURSELF SOMETHING ELSE</Text><View style={styles.nameEditRow}><TextInput value={draftName} onChangeText={setDraftName} style={[styles.nameEdit, { color: colors.foreground, borderColor: colors.border, backgroundColor: colors.card }]} placeholderTextColor={colors.mutedForeground} /><Pressable onPress={() => { onNewName(draftName); tap(); }} style={({ pressed }) => [styles.smallAction, { backgroundColor: colors.secondary }, pressed && styles.pressed]}><Ionicons name="checkmark" size={20} color={colors.secondaryForeground} /></Pressable></View><Text style={[styles.sectionKicker, { color: colors.mutedForeground, marginTop: 22 }]}>STATS FROM THIS RUN</Text><StatsGrid run={run} colors={colors} /><Text style={[styles.sectionKicker, { color: colors.mutedForeground, marginTop: 22 }]}>ACHIEVEMENTS</Text>{achievements(run).map((achievement) => <View key={achievement.id} style={[styles.achievementRow, { borderColor: colors.border, backgroundColor: colors.card }]}><View style={[styles.achievementIcon, { backgroundColor: achievement.unlocked ? colors.secondary : colors.muted }]}><Ionicons name={achievement.icon} size={18} color={achievement.unlocked ? colors.secondaryForeground : colors.mutedForeground} /></View><View style={styles.achievementCopy}><Text style={[styles.achievementTitle, { color: colors.primary }]}>{achievement.title}</Text><Text style={[styles.achievementDetail, { color: colors.mutedForeground }]}>{achievement.unlocked ? 'Unlocked · ' : ''}{achievement.detail}</Text></View></View>)}</ScrollView>;
  if (panel === 'map') return <ScrollView contentContainerStyle={styles.panelContent}>{rooms.map((item, index) => { const active = index === roomIndex(getPage(run.currentId).pageNumber); return <View key={item[0]} style={[styles.roomRow, { borderColor: active ? colors.accent : colors.border, backgroundColor: active ? colors.accent + '16' : colors.card }]}><View style={[styles.roomNumber, { backgroundColor: active ? colors.accent : colors.muted }]}><Text style={[styles.roomNumberText, { color: active ? colors.card : colors.primary }]}>{item[0]}</Text></View><View style={styles.roomCopy}><Text style={[styles.roomTitle, { color: colors.primary }]}>{item[1]}</Text><Text style={[styles.roomDetail, { color: colors.mutedForeground }]}>{active ? 'You are here · ' : ''}{item[2]}</Text></View>{active && <Ionicons name="location" size={18} color={colors.accent} />}</View>})}<View style={[styles.mapNote, { backgroundColor: colors.muted }]}><Ionicons name="information-circle-outline" size={18} color={colors.accent} /><Text style={[styles.mapNoteText, { color: colors.mutedForeground }]}>The entire school is stored on this device. Keep reading when the Wi-Fi gives up.</Text></View></ScrollView>;
  if (panel === 'settings') return <ScrollView contentContainerStyle={styles.panelContent}><Text style={[styles.panelIntro, { color: colors.mutedForeground }]}>Make the paperback behave the way your eyes and thumbs prefer.</Text><SettingRow icon="text-outline" title="Text size" detail="Adjust the story body copy" colors={colors}><View style={styles.segmented}>{(['normal', 'large', 'xl'] as TextSize[]).map((size) => <Pressable key={size} onPress={() => { tap(); setSettings((current) => ({ ...current, textSize: size })); }} style={[styles.segment, { borderColor: colors.border, backgroundColor: settings.textSize === size ? colors.primary : colors.card }]}><Text style={[styles.segmentText, { color: settings.textSize === size ? colors.card : colors.primary }]}>{size === 'xl' ? 'XL' : size[0].toUpperCase() + size.slice(1)}</Text></Pressable>)}</View></SettingRow><ToggleRow icon="bulb-outline" title="Choice hints" detail="Show the narrator's notes on choice cards" value={settings.choiceHints} colors={colors} onChange={(value) => setSettings((current) => ({ ...current, choiceHints: value }))} /><ToggleRow icon="walk-outline" title="Reduce motion" detail="Keep page transitions calm" value={settings.reducedMotion} colors={colors} onChange={(value) => setSettings((current) => ({ ...current, reducedMotion: value }))} /><ToggleRow icon="contrast-outline" title="High contrast" detail="Increase edge and text contrast" value={settings.highContrast} colors={colors} onChange={(value) => setSettings((current) => ({ ...current, highContrast: value }))} /><View style={[styles.offlinePanelNote, { borderColor: colors.border, backgroundColor: colors.card }]}><Ionicons name="cloud-offline-outline" size={18} color={colors.accent} /><Text style={[styles.offlinePanelText, { color: colors.mutedForeground }]}>Offline by design. Progress and preferences stay in local storage; no account or internet is required.</Text></View></ScrollView>;
  return <ScrollView contentContainerStyle={styles.panelContent}><View style={[styles.pauseCard, { backgroundColor: colors.primary }]}><Ionicons name="pause-circle-outline" size={34} color={colors.secondary} /><Text style={[styles.pauseTitle, { color: colors.card }]}>The hallway will wait.</Text><Text style={[styles.pauseCopy, { color: colors.muted }]}>Your current page is safe, your items are saved, and the suspicious bell has been told not to touch anything.</Text></View><Pressable onPress={onClose} style={({ pressed }) => [styles.menuRow, { borderColor: colors.border, backgroundColor: colors.card }, pressed && styles.pressed]}><Ionicons name="play" size={18} color={colors.secondaryForeground} /><Text style={[styles.menuRowText, { color: colors.primary }]}>Keep reading</Text></Pressable><Pressable onPress={() => { onClose(); onRestart(); }} style={({ pressed }) => [styles.menuRow, { borderColor: colors.border, backgroundColor: colors.card }, pressed && styles.pressed]}><Ionicons name="refresh" size={18} color={colors.accent} /><Text style={[styles.menuRowText, { color: colors.primary }]}>Start a fresh run</Text></Pressable><Text style={[styles.pauseFootnote, { color: colors.mutedForeground }]}>Autosaved {new Date(run.updatedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Text></ScrollView>;
}

function StatsGrid({ run, colors }: { run: Run; colors: ReturnType<typeof useColors> }) {
  const cells = [['Laughs', run.stats.laughs, 'happy-outline'], ['Nerve', run.stats.nerve, 'flash-outline'], ['Wit', run.stats.wit, 'bulb-outline'], ['Chaos', run.stats.chaos, 'shuffle-outline']] as const;
  return <View style={styles.statsGrid}>{cells.map(([label, value, icon]) => <View key={label} style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}><Ionicons name={icon} size={17} color={colors.accent} /><Text style={[styles.statValue, { color: colors.primary }]}>{value}</Text><Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{label}</Text></View>)}</View>;
}

function SettingRow({ icon, title, detail, colors, children }: { icon: keyof typeof Ionicons.glyphMap; title: string; detail: string; colors: ReturnType<typeof useColors>; children: React.ReactNode }) {
  return <View style={[styles.settingBlock, { borderBottomColor: colors.border }]}><View style={styles.settingHeading}><Ionicons name={icon} size={20} color={colors.accent} /><View style={styles.settingCopy}><Text style={[styles.settingTitle, { color: colors.primary }]}>{title}</Text><Text style={[styles.settingDetail, { color: colors.mutedForeground }]}>{detail}</Text></View></View>{children}</View>;
}

function ToggleRow({ icon, title, detail, value, onChange, colors }: { icon: keyof typeof Ionicons.glyphMap; title: string; detail: string; value: boolean; onChange: (value: boolean) => void; colors: ReturnType<typeof useColors> }) {
  return <Pressable onPress={() => { tap(); onChange(!value); }} style={[styles.toggleRow, { borderBottomColor: colors.border }]}><View style={styles.settingHeading}><Ionicons name={icon} size={20} color={colors.accent} /><View style={styles.settingCopy}><Text style={[styles.settingTitle, { color: colors.primary }]}>{title}</Text><Text style={[styles.settingDetail, { color: colors.mutedForeground }]}>{detail}</Text></View></View><View style={[styles.toggle, { backgroundColor: value ? colors.secondary : colors.muted }]}><View style={[styles.toggleKnob, { backgroundColor: colors.card, transform: [{ translateX: value ? 18 : 2 }] }]} /></View></Pressable>;
}

const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontFamily: 'Inter_500Medium', fontSize: 14 },
  screen: { flex: 1 },
  topbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 18, paddingBottom: 14 },
  brandLockup: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  brandKicker: { fontFamily: 'Inter_700Bold', fontSize: 9, letterSpacing: 1.2 },
  brandName: { fontFamily: 'Inter_700Bold', fontSize: 14, letterSpacing: .5, marginTop: 2 },
  iconButton: { width: 38, height: 38, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 19 },
  progressWrap: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 18, paddingBottom: 4 },
  progressTrack: { height: 5, borderRadius: 4, flex: 1, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  progressText: { fontFamily: 'Inter_600SemiBold', fontSize: 11, minWidth: 48, textAlign: 'right' },
  content: { paddingHorizontal: 18, paddingTop: 28 },
  eyebrowRow: { flexDirection: 'row', alignItems: 'center', gap: 7, marginBottom: 10 },
  liveDot: { width: 7, height: 7, borderRadius: 4 },
  eyebrow: { flex: 1, fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: .4 },
  chapterName: { fontFamily: 'Inter_600SemiBold', fontSize: 13, marginBottom: 6 },
  title: { fontFamily: 'serif', fontSize: 38, lineHeight: 43, letterSpacing: -.8, fontWeight: '700', marginBottom: 18 },
  titleLarge: { fontSize: 42, lineHeight: 48 },
  titleXL: { fontSize: 47, lineHeight: 53 },
  rule: { height: 1, marginBottom: 18 },
  body: { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 25, marginBottom: 15 },
  bodyLarge: { fontSize: 18, lineHeight: 29 },
  bodyXL: { fontSize: 20, lineHeight: 32 },
  aside: { flexDirection: 'row', gap: 9, borderLeftWidth: 3, paddingVertical: 11, paddingHorizontal: 12, marginBottom: 26 },
  asideText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 13, lineHeight: 19, fontStyle: 'italic' },
  choiceSection: { marginBottom: 24 },
  choiceHeader: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 },
  sectionKicker: { fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1.1 },
  hint: { fontFamily: 'Inter_400Regular', fontSize: 11 },
  choiceCard: { minHeight: 82, flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, padding: 13, marginBottom: 10, borderRadius: 14 },
  choicePressed: { opacity: .76, transform: [{ scale: .985 }] },
  choiceNumber: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center', borderRadius: 17 },
  choiceNumberText: { fontFamily: 'Inter_700Bold', fontSize: 11 },
  choiceCopy: { flex: 1, gap: 5 },
  choiceLabel: { fontFamily: 'Inter_700Bold', fontSize: 15, lineHeight: 20 },
  choiceNote: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 17 },
  inventoryCard: { borderWidth: 1, padding: 15, borderRadius: 15, marginBottom: 14 },
  inventoryHeader: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  inventoryTitle: { fontFamily: 'Inter_700Bold', fontSize: 16, marginTop: 4 },
  inventoryList: { gap: 7, marginTop: 13 },
  itemPill: { flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 7, paddingHorizontal: 9, borderRadius: 8, maxWidth: 235 },
  itemText: { fontFamily: 'Inter_500Medium', fontSize: 11 },
  emptyText: { fontFamily: 'Inter_400Regular', fontSize: 13, marginTop: 10 },
  bottomBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, paddingHorizontal: 18, paddingTop: 9 },
  bottomAction: { alignItems: 'center', gap: 2, minWidth: 54, paddingVertical: 3 },
  bottomActionText: { fontFamily: 'Inter_600SemiBold', fontSize: 10 },
  bottomCenter: { alignItems: 'center' },
  statsLine: { fontFamily: 'Inter_500Medium', fontSize: 11 },
  saveLine: { fontFamily: 'Inter_400Regular', fontSize: 9, marginTop: 3 },
  pressed: { opacity: .7 },
  disabled: { opacity: .42 },
  welcome: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  welcomeStamp: { alignSelf: 'flex-start', borderWidth: 1, paddingVertical: 9, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', gap: 8, transform: [{ rotate: '-3deg' }], marginBottom: 27 },
  stampText: { fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1.2 },
  welcomeKicker: { fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1.2, marginBottom: 9 },
  welcomeTitle: { fontFamily: 'serif', fontWeight: '700', fontSize: 50, lineHeight: 54, letterSpacing: -1.4 },
  welcomeCopy: { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, marginTop: 18, marginBottom: 25 },
  nameCard: { borderWidth: 1, padding: 14, borderRadius: 13, marginBottom: 12 },
  nameInput: { fontFamily: 'Inter_500Medium', fontSize: 16, paddingVertical: 9, borderBottomWidth: 1, marginTop: 7 },
  primaryButton: { minHeight: 54, borderRadius: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, paddingHorizontal: 18, marginBottom: 10 },
  primaryButtonText: { fontFamily: 'Inter_700Bold', fontSize: 15 },
  resumeButton: { minHeight: 52, borderWidth: 1, borderRadius: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  resumeText: { fontFamily: 'Inter_600SemiBold', fontSize: 14 },
  offlineNote: { textAlign: 'center', fontFamily: 'Inter_400Regular', fontSize: 12, marginTop: 20 },
  modalBackdrop: { flex: 1, justifyContent: 'flex-end' },
  modalDismiss: { flex: 1 },
  sheet: { maxHeight: '88%', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingTop: 9 },
  sheetHandle: { alignSelf: 'center', width: 38, height: 4, borderRadius: 3, marginBottom: 10 },
  sheetHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 12 },
  sheetTitle: { fontFamily: 'serif', fontWeight: '700', fontSize: 27 },
  closeButton: { padding: 3 },
  panelContent: { paddingHorizontal: 20, paddingBottom: 22 },
  profileHero: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16, borderRadius: 15, marginBottom: 21 },
  profileAvatar: { width: 52, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 26 },
  profileAvatarText: { fontFamily: 'Inter_700Bold', fontSize: 24 },
  profileName: { fontFamily: 'Inter_700Bold', fontSize: 19 },
  profileSub: { fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 3 },
  nameEditRow: { flexDirection: 'row', gap: 8, marginTop: 9 },
  nameEdit: { flex: 1, minHeight: 46, borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, fontFamily: 'Inter_500Medium', fontSize: 15 },
  smallAction: { width: 46, minHeight: 46, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10 },
  statBox: { width: '48%', borderWidth: 1, padding: 11, borderRadius: 11 },
  statValue: { fontFamily: 'Inter_700Bold', fontSize: 22, marginTop: 7 },
  statLabel: { fontFamily: 'Inter_500Medium', fontSize: 11, marginTop: 2 },
  achievementRow: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, padding: 10, borderRadius: 11, marginTop: 8 },
  achievementIcon: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center', borderRadius: 17 },
  achievementCopy: { flex: 1 },
  achievementTitle: { fontFamily: 'Inter_700Bold', fontSize: 13 },
  achievementDetail: { fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 3 },
  roomRow: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, padding: 11, borderRadius: 11, marginBottom: 8 },
  roomNumber: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center', borderRadius: 17 },
  roomNumberText: { fontFamily: 'Inter_700Bold', fontSize: 11 },
  roomCopy: { flex: 1 },
  roomTitle: { fontFamily: 'Inter_700Bold', fontSize: 13 },
  roomDetail: { fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 3 },
  mapNote: { flexDirection: 'row', gap: 8, padding: 12, borderRadius: 10, marginTop: 10 },
  mapNoteText: { flex: 1, fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 18 },
  panelIntro: { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 21, marginBottom: 15 },
  settingBlock: { borderBottomWidth: 1, paddingVertical: 13 },
  settingHeading: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  settingCopy: { flex: 1 },
  settingTitle: { fontFamily: 'Inter_700Bold', fontSize: 14 },
  settingDetail: { fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 3 },
  segmented: { flexDirection: 'row', gap: 6, marginTop: 11 },
  segment: { flex: 1, borderWidth: 1, borderRadius: 9, paddingVertical: 9, alignItems: 'center' },
  segmentText: { fontFamily: 'Inter_600SemiBold', fontSize: 11 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 15 },
  toggle: { width: 40, height: 23, borderRadius: 14, justifyContent: 'center' },
  toggleKnob: { width: 19, height: 19, borderRadius: 10 },
  offlinePanelNote: { flexDirection: 'row', gap: 8, padding: 12, borderWidth: 1, borderRadius: 11, marginTop: 18 },
  offlinePanelText: { flex: 1, fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 18 },
  pauseCard: { padding: 19, borderRadius: 15, marginBottom: 14 },
  pauseTitle: { fontFamily: 'serif', fontWeight: '700', fontSize: 25, marginTop: 12 },
  pauseCopy: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 20, marginTop: 7 },
  menuRow: { minHeight: 54, flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, paddingHorizontal: 15, borderRadius: 12, marginBottom: 9 },
  menuRowText: { fontFamily: 'Inter_700Bold', fontSize: 14 },
  pauseFootnote: { textAlign: 'center', fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 8 },
  endingCard: { padding: 19, borderRadius: 17, marginTop: 3, marginBottom: 24 },
  endingBadge: { alignSelf: 'flex-start', paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 },
  endingBadgeText: { fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1 },
  endingTitle: { fontFamily: 'serif', fontWeight: '700', fontSize: 29, lineHeight: 34, marginTop: 16 },
  endingCopy: { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 22, marginTop: 9, marginBottom: 17 },
});