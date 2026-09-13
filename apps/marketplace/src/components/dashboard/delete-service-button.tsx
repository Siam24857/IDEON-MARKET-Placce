"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DeleteServiceButton({ serviceId }: { serviceId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function remove() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/freelancer/services/${serviceId}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.message ?? "Something went wrong");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {error ? (
        <span className="text-xs text-destructive">{error}</span>
      ) : null}
      <Button
        variant="outline"
        size="sm"
        disabled={loading}
        onClick={remove}
        aria-label="Delete service"
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Trash2 className="text-destructive" />
        )}
        Delete
      </Button>
    </div>
  );
}