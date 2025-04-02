import React from "react";

interface AdFormOptionsProps {
  brandVoice: string;
  setBrandVoice: (value: string) => void;
  awarenessStage: string;
  setAwarenessStage: (value: string) => void;
  tone: string;
  setTone: (value: string) => void;
  goal: string;
  setGoal: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  platform: string;
  setPlatform: (value: string) => void;
  persuasionBlocks: string[];
  setPersuasionBlocks: (blocks: string[]) => void;
}

const brandVoices = [
  "Playful",
  "Professional",
  "Bold",
  "Emotional",
  "Friendly",
  "Luxurious",
  "Casual",
  "Witty",
  "Direct",
  "Inspirational",
  "Authoritative",
  "Youthful",
  "Quirky",
];

const awarenessStages = [
  "Unaware",
  "Problem Aware",
  "Solution Aware",
  "Product Aware",
  "Most Aware",
];

const tones = [
  "Casual",
  "Formal",
  "Humorous",
  "Inspirational",
  "Conversational",
  "Urgent",
];

const adGoals = [
  "Awareness",
  "Engagement",
  "Sales",
  "Retention",
  "Lead Generation",
  "Traffic",
];

const themes = [
  "Festive",
  "Summer",
  "Back to School",
  "New Year",
  "Valentine’s Day",
  "Rainy Season",
  "Travel Season",
  "Exam Season",
];

const platformOptions = ["Instagram", "Facebook", "LinkedIn", "X"];

const persuasionOptions = [
  "Feature",
  "Benefit",
  "Meaning",
  "Attention",
  "Interest",
  "Desire",
  "Action",
];

const AdFormOptions: React.FC<AdFormOptionsProps> = ({
  brandVoice,
  setBrandVoice,
  awarenessStage,
  setAwarenessStage,
  tone,
  setTone,
  goal,
  setGoal,
  theme,
  setTheme,
  platform,
  setPlatform,
  persuasionBlocks,
  setPersuasionBlocks,
}) => {
  const toggleBlock = (block: string) => {
    if (persuasionBlocks.includes(block)) {
      setPersuasionBlocks(persuasionBlocks.filter((b) => b !== block));
    } else {
      setPersuasionBlocks([...persuasionBlocks, block]);
    }
  };

  return (
    <div className="space-y-4 mt-4 font-serif">
      {/* Brand Voice */}
      <div>
        <label className="block font-medium mb-1">Brand Voice</label>
        <select
          value={brandVoice}
          onChange={(e) => setBrandVoice(e.target.value)}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Brand Voice</option>
          {brandVoices.map((voice) => (
            <option key={voice} value={voice.toLowerCase()}>
              {voice}
            </option>
          ))}
        </select>
      </div>

      {/* Awareness Stage */}
      <div>
        <label className="block font-medium mb-1">
          Customer Awareness Stage
        </label>
        <select
          value={awarenessStage}
          onChange={(e) => setAwarenessStage(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select Awareness Stage</option>
          {awarenessStages.map((stage) => (
            <option key={stage} value={stage.toLowerCase()}>
              {stage}
            </option>
          ))}
        </select>
      </div>

      {/* Tone */}
      <div>
        <label className="block font-medium mb-1">Ad Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select Tone</option>
          {tones.map((t) => (
            <option key={t} value={t.toLowerCase()}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Goal */}
      <div>
        <label className="block font-medium mb-1">Ad Goal</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select Goal</option>
          {adGoals.map((g) => (
            <option key={g} value={g.toLowerCase()}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Theme */}
      <div>
        <label className="block font-medium mb-1">Theme/Season</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select Theme</option>
          {themes.map((th) => (
            <option key={th} value={th.toLowerCase()}>
              {th}
            </option>
          ))}
        </select>
      </div>

      {/* Platform */}
      <div>
        <label className="block font-medium mb-1">Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full border rounded p-2"
          required // ✅ Add this
        >
          <option value="">Select Platform</option>
          {platformOptions.map((p) => (
            <option key={p} value={p.toLowerCase()}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Persuasion Building Blocks */}
      <div>
        <label className="block font-medium mb-1">
          Persuasion Building Blocks
        </label>
        <div className="flex flex-wrap gap-2">
          {persuasionOptions.map((block) => (
            <label key={block} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                value={block.toLowerCase()}
                checked={persuasionBlocks.includes(block.toLowerCase())}
                onChange={() => toggleBlock(block.toLowerCase())}
              />
              <span>{block}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdFormOptions;
