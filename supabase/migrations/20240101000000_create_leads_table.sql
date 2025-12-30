-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  messaggio TEXT NOT NULL,
  tipo_interesse TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read (optional, for admin)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

