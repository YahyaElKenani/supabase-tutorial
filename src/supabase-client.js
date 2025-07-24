import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gijiybpcaojukxzsijki.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpaml5YnBjYW9qdWt4enNpamtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNTMxOTYsImV4cCI6MjA2ODkyOTE5Nn0.ywV4j9sXHn4KApgwS8kzMey2ayHgjh0u8pb4C5s253Q'
)