"use client";

import React from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { GridPattern } from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Link2, Share2 } from "lucide-react";
import { Label } from "./ui/label";

const Short = () => {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [lnk, setlnk] = React.useState("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleShorten = async () => {
    if (url.trim() === "") {
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/lnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setOpen(true);
        setUrl("");
        setlnk(data.lnk);
      }
      console.log("Shortened URL response:", data);
    } catch (error) {
      console.log("Error shortening URL:", error);
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="flex w-[30rem] border-2 border-green-300/50 rounded-2xl py-1">
          <Input
            ref={inputRef}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleShorten();
              }
            }}
            className="border-none focus-visible:border-none focus-visible:ring-0"
            type="text"
            placeholder="Enter your long URL here"
          />
          <button
            onClick={handleShorten}
            className="px-3 mr-1 font-semibold rounded-2xl border border-green-500 bg-green-600/10 text-black hover:bg-green-500/20 transition-colors cursor-pointer">
            Shorten
          </button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen} modal={true}>
        <DialogContent className="sm:max-w-md rounded-3xl space-y-4">
          <GridPattern
            width={60}
            height={60}
            className={cn(
              "absolute inset-0 stroke-green-400/30 [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
            )}
          />

          <DialogHeader>
            <DialogTitle>
              <div className="w-8 h-8 grid place-content-center bg-green-600/20 rounded-md border border-green-600">
                <Share2 className="stroke-green-600" />
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-start gap-2">
            <Label className="font-semibold">Share link</Label>
            <div className="flex w-full border-2 border-green-300/50 rounded-2xl py-1">
              <Input
                readOnly
                value={lnk}
                className="border-none flex-1 focus-visible:border-none focus-visible:ring-0 selection:bg-green-800"
                type="text"
                placeholder="Enter your long URL here"
              />
              <button className="px-3 leading-6 flex items-center gap-2 mr-1 font-semibold rounded-lg border border-green-500 bg-green-600/10 text-black hover:bg-green-500/20 transition-colors cursor-pointer">
                <Link2 size={18} />
                Copy link
              </button>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button
                type="button"
                className="px-6 py-1 font-semibold rounded-lg border border-green-500 bg-transparent text-black hover:bg-green-500/20 transition-colors cursor-pointer">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>{" "}
      </Dialog>
    </>
  );
};

export default Short;
