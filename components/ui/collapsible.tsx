import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>{isOpen ? "▼" : "▶"}</Text>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    paddingLeft: 24,
    paddingRight: 8,
    paddingBottom: 16,
    gap: 8,
  },
});
