import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "./utils";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground",
            outline: "text-foreground",
            success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
            warning: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge({ className, variant, ...props }) {
    return (_jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}
export { Badge, badgeVariants };
//# sourceMappingURL=badge.js.map