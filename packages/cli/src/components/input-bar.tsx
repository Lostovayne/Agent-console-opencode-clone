import type { KeyBinding } from "@opentui/core";
import { EmptyBorder } from "./border";
import { StatusBar } from "./status-bar";

type Props = {
  onSubmit: (text: string) => void;
  disabled?: boolean;
};

export const TEXTAREA_KEY_BINGINGS: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "enter", action: "submit" },
  { name: "return", shift: true, action: "newline" },
  { name: "enter", shift: true, action: "newline" },
];

export function InputBar({ onSubmit, disabled }: Props) {
  return (
    <box width="100%" alignItems="center">
      <box
        border={["left"]}
        borderColor="cyan"
        customBorderChars={{
          ...EmptyBorder,
          vertical: "│",
          bottomLeft: "╹",
        }}
      >
        <box
          position="relative"
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor="#1A1A24"
          width="100%"
          gap={1}
        >
          <textarea
            minWidth={"100%"}
            focused={!disabled}
            keyBindings={TEXTAREA_KEY_BINGINGS}
            placeholder={`Ask anything... "Fix a bug in the database"`}
          />
          <StatusBar />
        </box>
      </box>
    </box>
  );
}
