-- Athletix Gym Database Schema
-- Run this in the Supabase SQL Editor to set up your tables.

-- ============================================================
-- Table: contact_submissions
-- Stores inquiries from the contact form.
-- ============================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  interest TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon / authenticated users
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins can read
CREATE POLICY "Admins can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- ============================================================
-- Table: trial_bookings
-- Stores free trial booking requests.
-- ============================================================
CREATE TABLE IF NOT EXISTS trial_bookings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE trial_bookings ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon / authenticated users
CREATE POLICY "Anyone can insert trial bookings"
  ON trial_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins can read
CREATE POLICY "Admins can read trial bookings"
  ON trial_bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- ============================================================
-- Indexes for performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_trial_bookings_created_at
  ON trial_bookings (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_trial_bookings_status
  ON trial_bookings (status);
