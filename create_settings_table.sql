-- Table de réglages globaux (hijri_offset, etc.)
-- À exécuter dans le SQL Editor du dashboard Supabase.

CREATE TABLE IF NOT EXISTS public.settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT ''
);

ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Lecture publique : nécessaire pour les appels getSetting côté client (clé anon)
CREATE POLICY "Public read access" ON public.settings
  FOR SELECT USING (true);

-- Écriture publique : l'app n'utilise pas Supabase Auth (l'admin est protégé par
-- un mot de passe côté client), donc les upserts de la page admin partent avec la
-- clé anon. Une policy limitée à 'authenticated' bloquerait silencieusement la
-- sauvegarde de l'offset. À durcir si Supabase Auth est ajouté un jour :
--   CREATE POLICY "Authenticated write access" ON public.settings
--     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Public write access" ON public.settings
  FOR ALL USING (true) WITH CHECK (true);

-- Seed : décalage hijri par défaut
INSERT INTO public.settings (key, value)
VALUES ('hijri_offset', '0')
ON CONFLICT (key) DO NOTHING;
