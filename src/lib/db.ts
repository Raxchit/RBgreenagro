import { Pool } from 'pg'

// ✅ DIRECT POSTGRES CONNECTION - NO PRISMA!
// ✅ WORKS 100% ON VERCEL WITH SUPABASE!

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 3,
  idleTimeoutMillis: 15000,
  connectionTimeoutMillis: 10000
})

export const db = {
  admin: {
    findUnique: async ({ where }: any) => {
      const result = await pool.query('SELECT * FROM "Admin" WHERE email = $1 LIMIT 1', [where.email])
      return result.rows[0] || null
    },
    create: async ({ data }: any) => {
      const result = await pool.query(
        'INSERT INTO "Admin" (id, email, password, "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING *',
        [data.email, data.password]
      )
      return result.rows[0]
    },
    upsert: async ({ where, update, create }: any) => {
      const exists = await pool.query('SELECT * FROM "Admin" WHERE email = $1 LIMIT 1', [where.email])
      
      if (exists.rows.length > 0) {
        const result = await pool.query(
          'UPDATE "Admin" SET password = $1, "updatedAt" = NOW() WHERE email = $2 RETURNING *',
          [update.password, where.email]
        )
        return result.rows[0]
      } else {
        const result = await pool.query(
          'INSERT INTO "Admin" (id, email, password, "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING *',
          [create.email, create.password]
        )
        return result.rows[0]
      }
    }
  },

  product: {
    findMany: async () => {
      const result = await pool.query('SELECT * FROM "Product" ORDER BY "createdAt" DESC')
      return result.rows
    },
    findUnique: async ({ where }: any) => {
      const result = await pool.query('SELECT * FROM "Product" WHERE id = $1 LIMIT 1', [where.id])
      return result.rows[0] || null
    },
    create: async ({ data }: any) => {
      const result = await pool.query(
        'INSERT INTO "Product" (id, name, description, image, category, price, "inStock", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *',
        [data.name, data.description, data.image, data.category, data.price, data.inStock]
      )
      return result.rows[0]
    },
    update: async ({ where, data }: any) => {
      const fields = Object.keys(data).map((key, i) => `"${key}" = $${i+2}`).join(', ')
      const values = [where.id, ...Object.values(data)]
      
      const result = await pool.query(
        `UPDATE "Product" SET ${fields}, "updatedAt" = NOW() WHERE id = $1 RETURNING *`,
        values
      )
      return result.rows[0]
    },
    delete: async ({ where }: any) => {
      await pool.query('DELETE FROM "Product" WHERE id = $1', [where.id])
    }
  },

  feedback: {
    findMany: async () => {
      const result = await pool.query('SELECT * FROM "Feedback" ORDER BY "createdAt" DESC')
      return result.rows
    },
    create: async ({ data }: any) => {
      const result = await pool.query(
        'INSERT INTO "Feedback" (id, name, email, phone, message, "createdAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW()) RETURNING *',
        [data.name, data.email, data.phone, data.message]
      )
      return result.rows[0]
    }
  }
}