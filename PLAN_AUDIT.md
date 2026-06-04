# Plan d'Action - Audit Technique & Architectural (Qurratul-Ayni)

Ce document présente les résultats de l'audit complet réalisé sur la base de code actuelle. Les recommandations sont classées par priorité pour garantir la sécurité, l'accessibilité et la fiabilité du projet.

## 1. Sécurité (Priorité Haute) 🚨

*   **Suppression des logs sensibles :** Nettoyer `src/utils/supabase.ts` pour retirer les `console.log` qui exposent la `NEXT_PUBLIC_SUPABASE_URL` et la `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans la console du navigateur.
*   **Audit RLS (Supabase) :** Vérifier et activer les politiques de sécurité (Row Level Security) sur les tables Supabase. L'utilisation du client `anon` côté frontend nécessite une couche RLS robuste pour empêcher toute écriture non autorisée.
*   **Validation des Entrées :** Bien que peu de formulaires soient présents, il est crucial d'implémenter des schémas de validation (ex: Zod) pour toute donnée provenant de l'extérieur (Supabase ou recherche locale).

## 2. Accessibilité & Conformité WCAG (Priorité Haute) ♿

*   **Labels Accessibles :** Ajouter des `aria-label` descriptifs sur tous les boutons iconographiques (Play/Pause, Navigation, Recherche).
*   **Gestion des Langues :** Envelopper les segments de texte en arabe dans des balises `<span lang="ar" dir="rtl">` pour assurer une vocalisation correcte par les lecteurs d'écran.
*   **Contraste Visuel :** Revoir les classes Tailwind à faible opacité (ex: `text-white/30`) pour garantir un ratio de contraste minimal de 4.5:1, indispensable pour les longs textes.
*   **Hiérarchie Sémantique :** Remplacer les structures purement visuelles par des balises `<section>` et une hiérarchie de titres (`h2`, `h3`) cohérente.

## 3. Fiabilité des Données (Priorité Moyenne) 📚

*   **Correction Textuelle :** Supprimer les caractères arabes parasites dans le texte français de la Partie 3 (`enverرا` -> `enverra`).
*   **Centralisation des Données :** Éliminer la redondance entre `src/data/chapters.ts` et Supabase. Choisir une "source de vérité" unique pour éviter les désynchronisations.
*   **Système de Validation :** Mettre en place des types TypeScript stricts et des validations de schémas pour le contenu des chapitres afin de prévenir les bugs d'affichage des caractères spéciaux.

## 4. Architecture & Optimisation (Priorité Moyenne) 🏗️

*   **Routes Dynamiques :** Refactoriser la structure `/partie/1/page.tsx`, `/partie/2/page.tsx`, etc., vers une route dynamique unique `/partie/[id]/page.tsx`. Cela simplifiera drastiquement la maintenance et le déploiement de nouveaux chapitres.
*   **Optimisation Server Components (RSC) :** Déplacer la directive `'use client'` du `RootLayout` vers les composants feuilles. Actuellement, l'application se comporte comme une SPA classique, perdant les bénéfices du rendu serveur (SEO, performance au chargement).
*   **Options de Lecture :** Proposer un menu de réglages utilisateur (taille de police, interlignage, thèmes Sépia/Clair) pour améliorer le confort de lecture des textes éducatifs denses.

## 5. Performance (Priorité Basse) ⚡

*   **Lazy Loading :** Optimiser le chargement des lecteurs audio et des images de haute qualité pour réduire le poids initial de la page.
*   **Mise en cache :** Implémenter une stratégie de cache robuste pour les appels Supabase afin de limiter la consommation de quota et d'accélérer la navigation.
