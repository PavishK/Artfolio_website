"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [60, -60]);
  const rotateY = useTransform(x, [-150, 150], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = true,
  sensitivity = 180,
  cardDimensions = { width: 260, height: 340 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 22 },
  sendToBackOnClick = true,
}) {
  const [cards, setCards] = useState(cardsData);
  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 800,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 12 - 6 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 bg-gradient-to-br from-blush via-royal to-forest hover:shadow-[0_0_40px_-10px_rgba(92,26,114,0.6)] transition-all duration-300"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 5 + randomRotate,
                scale: 1 + index * 0.05 - cards.length * 0.05,
                y: index * 6,
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-blush text-lg font-semibold tracking-wide drop-shadow-lg">
                    Beautiful Moment
                  </span>
                </div>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
