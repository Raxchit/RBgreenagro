-- ======================================
-- ✅ FULL DATABASE SCHEMA FOR NEON
-- ======================================

-- Run this ENTIRE FILE in Neon SQL Editor
-- Click "Run" button after pasting

-- 1. Admin Table
CREATE TABLE IF NOT EXISTS "Admin" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS "Product" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  category TEXT,
  price DECIMAL(10,2),
  "inStock" BOOLEAN DEFAULT true,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Feedback Table
CREATE TABLE IF NOT EXISTS "Feedback" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create Default Admin User
INSERT INTO "Admin" (email, password) 
VALUES ('admin@rbagro.com', 'Sajan@97450')
ON CONFLICT (email) DO NOTHING;

-- 5. Optional: Add sample products
INSERT INTO "Product" (name, description, category, price, "inStock") VALUES
('Organic Fertilizer', '100% organic compost fertilizer for all crops', 'Fertilizer', 250.00, true),
('Crop Protection Spray', 'Natural pest control solution', 'Pesticides', 180.00, true),
('Vegetable Seeds', 'Hybrid high yield vegetable seeds', 'Seeds', 75.00, true),
('Growth Booster', 'Plant growth stimulant', 'Nutrients', 320.00, true);

-- ======================================
-- ✅ DATABASE SETUP COMPLETED
-- ======================================