import * as React from "react";
interface FieldProps extends React.ComponentProps<"input"> {
    label: string;
    error?: string;
    hint?: string;
}
export declare const Field: React.ForwardRefExoticComponent<Omit<FieldProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=field.d.ts.map