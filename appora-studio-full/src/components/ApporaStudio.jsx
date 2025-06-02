
// ApporaStudio.jsx (extrait)
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function ApporaStudio() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur Appora Studio</h1>
      <p className="text-gray-600">L'éditeur visuel arrivera ici.</p>
    </div>
  );
}
