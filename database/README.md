# Database Setup Instructions

This directory contains the SQL scripts needed to set up your Neon PostgreSQL database for the Radiology Equipment Inventory System.

## Files

- `schema.sql` - Creates all necessary tables, indexes, and constraints
- `seed_data.sql` - Populates the database with initial reference data and sample equipment
- `README.md` - This file with setup instructions

## Setup Steps

### 1. Connect to your Neon Database

You can connect to your Neon database using any PostgreSQL client. Here are a few options:

#### Option A: Using psql (Command Line)
```bash
psql "postgresql://neondb_owner:npg_UdtWPBD5pl8K@ep-dry-butterfly-ab5y7ufx-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require"
```

#### Option B: Using a GUI client like pgAdmin, DBeaver, or TablePlus
Use these connection details:
- Host: `ep-dry-butterfly-ab5y7ufx-pooler.eu-west-2.aws.neon.tech`
- Database: `neondb`
- User: `neondb_owner`
- Password: `npg_UdtWPBD5pl8K`
- Port: `5432`
- SSL Mode: `require`

### 2. Run the Schema Script

Execute the `schema.sql` file to create all tables:

```sql
-- Copy and paste the contents of schema.sql into your SQL client and execute
```

This will create:
- `buildings` - Hospital buildings
- `departments` - Departments within buildings
- `rooms` - Rooms within departments
- `manufacturers` - Equipment manufacturers
- `equipment_types` - Types of medical equipment
- `funding_sources` - Funding sources for equipment purchases
- `equipment` - Main equipment inventory table

### 3. Run the Seed Data Script

Execute the `seed_data.sql` file to populate with initial data:

```sql
-- Copy and paste the contents of seed_data.sql into your SQL client and execute
```

This will populate the database with:
- 3 buildings (Main Hospital, Outpatient Center, Emergency Department)
- 5 departments (Radiology, Emergency Radiology, Outpatient Imaging, Nuclear Medicine, Ultrasound)
- 6 rooms across different departments
- 6 manufacturers (GE, Siemens, Philips, Hitachi, Canon, Hologic)
- 6 equipment types (X-Ray, MRI, CT, Ultrasound, Mammography, DEXA)
- 4 funding sources
- 7 sample equipment items

### 4. Verify the Setup

After running both scripts, you can verify the setup by running:

```sql
-- Check that all tables were created
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Check sample data
SELECT COUNT(*) FROM equipment;
SELECT COUNT(*) FROM manufacturers;
SELECT COUNT(*) FROM equipment_types;
```

You should see:
- 7 tables created
- 7 equipment items
- 6 manufacturers
- 6 equipment types

## Database Schema Overview

The database follows a normalized structure:

```
buildings (1) → departments (1) → rooms (1) → equipment (*)
manufacturers (1) → equipment (*)
equipment_types (1) → equipment (*)
funding_sources (1) → equipment (*)
```

## Important Notes

- All tables include `created_at` and `updated_at` timestamps
- Foreign key constraints ensure data integrity
- Indexes are created on frequently queried columns for performance
- Check constraints validate enum values (status, condition, ownership type)
- The `equipment` table is the main table containing all inventory items

## Troubleshooting

If you encounter any issues:

1. **Connection Issues**: Verify your Neon database credentials and network connectivity
2. **Permission Issues**: Ensure the `neondb_owner` user has sufficient privileges
3. **Duplicate Data**: The seed script uses `ON CONFLICT DO NOTHING` to prevent duplicate entries
4. **Sequence Issues**: The seed script resets sequences to continue from the last inserted ID

## Next Steps

After setting up the database:

1. Your React application should now be able to connect to the database
2. You can add new equipment through the application interface
3. All data will be persisted in your Neon PostgreSQL database
4. You can query the database directly for reporting or analysis

For any issues with the application, check the browser console and ensure all environment variables are properly set in your `.env.local` file.