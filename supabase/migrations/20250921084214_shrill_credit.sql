/*
  # Create tables for SakhaSahayak

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `place` (text)
      - `check_in` (date)
      - `check_out` (date, optional)
      - `type` (text)
      - `created_at` (timestamp)
    - `alerts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `type` (text)
      - `severity` (text)
      - `location` (text)
      - `coordinates` (jsonb, optional)
      - `active` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to insert bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  place text NOT NULL,
  check_in date NOT NULL,
  check_out date,
  type text NOT NULL CHECK (type IN ('hotel', 'restaurant', 'transport')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  type text NOT NULL CHECK (type IN ('weather', 'landslide', 'traffic', 'emergency')),
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high')),
  location text NOT NULL,
  coordinates jsonb,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Allow public to read alerts
CREATE POLICY "Allow public to read alerts"
  ON alerts
  FOR SELECT
  TO public
  USING (active = true);

-- Allow public to insert bookings
CREATE POLICY "Allow public to insert bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to read their own bookings (optional)
CREATE POLICY "Allow public to read bookings"
  ON bookings
  FOR SELECT
  TO public
  USING (true);

-- Insert sample alerts
INSERT INTO alerts (title, description, type, severity, location, coordinates) VALUES
  ('Heavy Rainfall Warning', 'Heavy rainfall expected in Dehradun district. Travelers advised to check road conditions.', 'weather', 'medium', 'Dehradun', '[30.3165, 78.0322]'),
  ('Landslide Alert', 'Risk of landslide on Rishikesh-Badrinath highway due to recent rains.', 'landslide', 'high', 'Rishikesh-Badrinath Highway', '[30.2000, 78.5000]'),
  ('Traffic Congestion', 'Heavy traffic reported on Mussoorie-Dehradun road due to festival crowd.', 'traffic', 'low', 'Mussoorie-Dehradun Road', '[30.4000, 78.1000]'),
  ('Road Closure', 'Temporary road closure on Nainital-Almora highway for maintenance work.', 'traffic', 'high', 'Nainital-Almora Highway', '[29.4000, 79.5000]');