export {};

declare global {
  interface Window {
    example: string;
    showSaveFilePicker: (opts: any) => any;
  }
}