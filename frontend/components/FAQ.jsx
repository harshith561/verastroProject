'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
                {item.question}
              </span>
              {isOpen ? (
                <ChevronUp size={16} className="flex-shrink-0 text-gray-500" />
              ) : (
                <ChevronDown size={16} className="flex-shrink-0 text-gray-500" />
              )}
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className="mt-3"
              >
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
