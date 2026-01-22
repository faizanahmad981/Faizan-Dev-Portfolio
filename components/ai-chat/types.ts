export type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};
