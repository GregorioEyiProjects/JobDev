# 1. Crea el proyecto con Expo Router

npx create-expo-app devjobs (sin --template... te crear un projecto con Expo Route, similar a la estructura de carpetas de Next.js)

# 2. Dependencias del sistema de diseño y formularios

npx expo install @supabase/supabase-js
npx expo install expo-secure-store
npm install react-hook-form zod @hookform/resolvers

# 3. AsyncStorage para el onboarding

npx expo install @react-native-async-storage/async-storage

# ---------Lo que hace que los imports no usados desaparezcan esta en la carpeta .vscode -> settings.json (cambiar a ="never")

# instala las dependencias de formularios

npm install react-hook-form zod @hookform/resolvers

# Supabase policies

create policy "Users can view own saved jobs"
on saved_jobs for select
using (auth.uid() = user_id);

create policy "Users can insert own saved jobs"
on saved_jobs for insert
with check (auth.uid() = user_id);

create policy "Users can delete own saved jobs"
on saved_jobs for delete
using (auth.uid() = user_id);

# select policyname from pg_policies where tablename = 'saved_jobs';
