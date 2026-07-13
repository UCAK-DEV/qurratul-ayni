'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizData, QuizQuestion as QuizQuestionType } from '@/types/content';
import { Flashcard } from './Flashcard';
import Icon from '@/components/Icon';

interface QuizSectionProps {
  quiz: QuizData;
  chapterTitle?: string;
}

// ─── Demo/mock quiz data for Partie 9 (La Zakat) ──────────────────────────────
export const ZAKAT_QUIZ_DEMO: QuizData = {
  flashcards: [
    {
      id: 'z-fc-1',
      front: 'Qu\'est-ce que la Zakat al-Fitr ?',
      frontAr: 'زَكَاةُ الفِطْر',
      back: 'L\'aumône obligatoire versée à la fin du Ramadan, avant la prière de l\'Aïd al-Fitr.',
      category: 'Zakat al-Fitr',
    },
    {
      id: 'z-fc-2',
      front: 'Quel est le seuil du Nissab pour l\'or ?',
      frontAr: 'النِّصَاب',
      back: 'Le Nissab pour l\'or est de 85 grammes (20 mithqals). La Zakat est due si ce seuil est atteint pendant un an lunaire complet (hawl).',
      category: 'Épargne',
    },
    {
      id: 'z-fc-3',
      front: 'Combien de catégories de personnes ont droit à la Zakat ?',
      frontAr: 'مَصَارِفُ الزَّكَاة',
      back: 'Huit (8) catégories, mentionnées dans la sourate At-Tawbah (9:60) : les pauvres, les nécessiteux, les collecteurs, les nouveaux convertis, les esclaves, les débiteurs, ceux qui œuvrent dans le chemin d\'Allah, et les voyageurs.',
      category: 'Bénéficiaires',
    },
    {
      id: 'z-fc-4',
      front: 'Quel est le taux standard de la Zakat sur l\'épargne et l\'or ?',
      frontAr: 'رُبُعُ الْعُشْر',
      back: '2,5% (le quart du dixième / rubʿ al-ʿushr) sur le montant total épargné, calculé après une année lunaire complète.',
      category: 'Calcul',
    },
  ],
  questions: [
    {
      id: 'z-q-1',
      question: 'La Zakat est-elle obligatoire pour un musulman qui possède de l\'or en dessous du Nissab ?',
      options: [
        'Oui, toujours',
        'Non, elle n\'est pas obligatoire en dessous du Nissab',
        'Seulement pendant le Ramadan',
        'Cela dépend de la région',
      ],
      correctIndex: 1,
      explanation: 'Le Nissab est le seuil minimal de richesse. En dessous de ce seuil, la Zakat n\'est pas obligatoire. Pour l\'or, ce seuil est de 85 grammes.',
    },
    {
      id: 'z-q-2',
      question: 'Combien de temps (hawl) faut-il posséder un bien pour que la Zakat soit due ?',
      options: [
        '6 mois lunaires',
        '1 année lunaire complète (354 jours)',
        '1 année solaire (365 jours)',
        '3 mois',
      ],
      correctIndex: 1,
      explanation: 'Le hawl (حَوْل) est la période d\'une année lunaire complète. Le bien doit avoir appartenu à son possesseur durant toute cette période.',
    },
    {
      id: 'z-q-3',
      question: 'Sur les céréales irriguées naturellement (par la pluie), quel est le taux de Zakat ?',
      options: ['2,5%', '5%', '10%', '20%'],
      correctIndex: 2,
      explanation: '10% (le dixième / ʿushr) pour les cultures irriguées naturellement. Le taux est réduit à 5% pour les cultures nécessitant un arrosage artificiel.',
    },
  ],
};

// ─── MCQ Quiz Card Component ──────────────────────────────────────────────────

const QuizQuestionCard: React.FC<{ question: QuizQuestionType; onAnswer: (correct: boolean) => void }> = ({
  question,
  onAnswer,
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    onAnswer(idx === question.correctIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <p className="text-white/90 font-serif text-lg leading-relaxed">{question.question}</p>

      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          const isSelected = selected === idx;
          const isCorrect = idx === question.correctIndex;
          const showResult = selected !== null;

          let stateClass = 'bg-white/[0.04] border-white/10 text-white/70 hover:bg-white/[0.07] hover:border-white/20';
          if (showResult) {
            if (isCorrect) stateClass = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300';
            else if (isSelected) stateClass = 'bg-red-500/15 border-red-500/40 text-red-300';
            else stateClass = 'bg-white/[0.02] border-white/5 text-white/30';
          }

          return (
            <motion.button
              key={idx}
              whileHover={selected === null ? { scale: 1.01 } : {}}
              whileTap={selected === null ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${stateClass}`}
            >
              <span className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center text-xs font-black ${
                showResult && isCorrect ? 'bg-emerald-500/30 border-emerald-500' :
                showResult && isSelected ? 'bg-red-500/30 border-red-500' :
                'border-white/20'
              }`}>
                {showResult && isCorrect ? '✓' : showResult && isSelected ? '✗' : String.fromCharCode(65 + idx)}
              </span>
              <span className="text-sm font-medium flex-1">{option}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {selected !== null && question.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 rounded-xl bg-gold/[0.08] border border-gold/20 flex gap-3">
              <Icon name="info" className="text-gold text-lg flex-shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm font-reading leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Main QuizSection Component ────────────────────────────────────────────────

export const QuizSection: React.FC<QuizSectionProps> = ({ quiz, chapterTitle }) => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz'>('flashcards');
  const [cardIndex, setCardIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const flashcards = quiz.flashcards ?? [];
  const questions = quiz.questions ?? [];

  const handleAnswer = (correct: boolean) => {
    const next = [...quizAnswers, correct];
    setQuizAnswers(next);
    setTimeout(() => {
      if (quizIndex + 1 < questions.length) {
        setQuizIndex(quizIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizAnswers([]);
    setQuizComplete(false);
  };

  const score = quizAnswers.filter(Boolean).length;

  if (flashcards.length === 0 && questions.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.7 }}
      className="mt-24 border-t border-white/5 pt-16"
      aria-label="Section de révision"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-5">
          <Icon name="school" className="text-gold text-base" />
          <span className="text-xs uppercase tracking-widest text-gold font-black">Révision & Mémorisation</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          Testez vos <span className="gold-gradient-text">connaissances</span>
        </h2>
        {chapterTitle && (
          <p className="text-white/40 text-sm font-reading mt-2">sur le chapitre «&nbsp;{chapterTitle}&nbsp;»</p>
        )}
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 p-1 bg-white/[0.03] rounded-2xl border border-white/5 max-w-xs mx-auto mb-8">
        {flashcards.length > 0 && (
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'flashcards'
                ? 'bg-gold text-[#241c07] shadow-md shadow-gold/20'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <Icon name="style" className="text-base" />
            Flashcards
          </button>
        )}
        {questions.length > 0 && (
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'quiz'
                ? 'bg-gold text-[#241c07] shadow-md shadow-gold/20'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <Icon name="quiz" className="text-base" />
            Quiz
          </button>
        )}
      </div>

      {/* Content Panel */}
      <div className="max-w-xl mx-auto p-6 md:p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
        <AnimatePresence mode="wait">
          {/* FLASHCARDS TAB */}
          {activeTab === 'flashcards' && flashcards.length > 0 && (
            <motion.div
              key="flashcards"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <Flashcard
                card={flashcards[cardIndex]}
                index={cardIndex}
                total={flashcards.length}
              />

              {/* Navigation arrows */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCardIndex((i) => Math.max(0, i - 1))}
                  disabled={cardIndex === 0}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white/50 hover:text-gold disabled:opacity-20 transition-all"
                  aria-label="Carte précédente"
                >
                  <Icon name="arrow_back" className="text-lg" />
                </motion.button>

                <div className="flex gap-1.5">
                  {flashcards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCardIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === cardIndex ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
                      }`}
                      aria-label={`Carte ${i + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCardIndex((i) => Math.min(flashcards.length - 1, i + 1))}
                  disabled={cardIndex === flashcards.length - 1}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white/50 hover:text-gold disabled:opacity-20 transition-all"
                  aria-label="Carte suivante"
                >
                  <Icon name="arrow_forward" className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && questions.length > 0 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {!quizComplete ? (
                <>
                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(quizIndex / questions.length) * 100}%` }}
                        className="h-full bg-gold rounded-full"
                      />
                    </div>
                    <span className="text-xs text-white/30 font-bold uppercase tracking-wider">
                      {quizIndex + 1}/{questions.length}
                    </span>
                  </div>

                  <QuizQuestionCard
                    key={quizIndex}
                    question={questions[quizIndex]}
                    onAnswer={handleAnswer}
                  />
                </>
              ) : (
                /* Score Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/30 flex items-center justify-center">
                      <span className="text-3xl font-black text-gold">
                        {score}/{questions.length}
                      </span>
                    </div>
                    {score === questions.length && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2"
                      >
                        <Icon name="star" className="text-3xl text-gold" />
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white mb-1">
                      {score === questions.length
                        ? 'Excellent travail ! بَارَكَ اللهُ فِيكَ'
                        : score >= questions.length / 2
                          ? 'Bien joué, continuez ainsi !'
                          : 'Relisez le chapitre, vous progresserez !'}
                    </h3>
                    <p className="text-white/40 text-sm font-reading">
                      {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {questions.length}
                    </p>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetQuiz}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider hover:border-white/20 transition-all"
                    >
                      <Icon name="refresh" className="text-base" />
                      Recommencer
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
