import { EmptyBorder } from "./border";
import { StatusBar } from "./status-bar";

type Props = {
  onSubmit: (text: string) => void;
  disabled?: boolean;
};

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
            placeholder={`Ask anything... "Fix a bug in the database"`}
          />
          <StatusBar />
        </box>
      </box>
    </box>
  );
}
