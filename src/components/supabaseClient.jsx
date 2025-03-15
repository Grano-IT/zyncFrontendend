import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lxqzxxohnxkrorurirlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXp4eG9obnhrcm9ydXJpcmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODc3NTYsImV4cCI6MjA1NjY2Mzc1Nn0.WWSsRzkzxQ5cE_DTn0tcuAyfqD6WiUoezYO-R2fuPtg';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;

