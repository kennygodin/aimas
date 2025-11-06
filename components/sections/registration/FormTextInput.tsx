import type { FieldValues } from "react-hook-form";
import type { Control, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  type?: string;
};

export const FormTextInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  isDisabled,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-2">
          <FormLabel className="font-normal data-[error=true]:text-white text-white">{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                disabled={isDisabled}
                className="h-16 border-none bg-white text-black text-lg px-4 rounded-none"
                placeholder={placeholder}
              />
            </div>
          </FormControl>
          <FormMessage className="font-cabinet mt-1 text-white" />
        </FormItem>
      )}
    />
  );
};
