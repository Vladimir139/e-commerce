export interface SliderProps {
  defaultValue: number[];
  onChange?: (value: number[]) => void;
  value?: number[];
  max?: number;
  min?: number;
}
