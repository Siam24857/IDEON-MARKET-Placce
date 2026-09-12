"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils";
import { Label } from "./label";
import { Input } from "./input";
export const Field = React.forwardRef(({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (_jsxs("div", { className: "space-y-1.5", children: [_jsx(Label, { htmlFor: inputId, children: label }), _jsx(Input, { id: inputId, ref: ref, "aria-invalid": Boolean(error), className: cn(error && "border-destructive", className), ...props }), hint && !error && (_jsx("p", { className: "text-xs text-muted-foreground", children: hint })), error && _jsx("p", { className: "text-xs text-destructive", children: error })] }));
});
Field.displayName = "Field";
//# sourceMappingURL=field.js.map