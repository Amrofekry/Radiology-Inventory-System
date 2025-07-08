-- Radiology Equipment Inventory System Database Schema
-- This script creates all necessary tables for the inventory system

-- Create Buildings table
CREATE TABLE IF NOT EXISTS buildings (
    building_id SERIAL PRIMARY KEY,
    building_code VARCHAR(10) NOT NULL UNIQUE,
    building_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Departments table
CREATE TABLE IF NOT EXISTS departments (
    department_id SERIAL PRIMARY KEY,
    dept_code VARCHAR(10) NOT NULL,
    dept_name VARCHAR(100) NOT NULL,
    building_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (building_id) REFERENCES buildings(building_id) ON DELETE CASCADE
);

-- Create Rooms table
CREATE TABLE IF NOT EXISTS rooms (
    room_id SERIAL PRIMARY KEY,
    room_code VARCHAR(10) NOT NULL,
    room_name VARCHAR(100) NOT NULL,
    department_id INTEGER NOT NULL,
    floor_number INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE CASCADE
);

-- Create Manufacturers table
CREATE TABLE IF NOT EXISTS manufacturers (
    manufacturer_id SERIAL PRIMARY KEY,
    manufacturer_code VARCHAR(10) NOT NULL UNIQUE,
    manufacturer_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Equipment Types table
CREATE TABLE IF NOT EXISTS equipment_types (
    equipment_type_id SERIAL PRIMARY KEY,
    type_code VARCHAR(10) NOT NULL UNIQUE,
    type_name VARCHAR(100) NOT NULL,
    gmdn_code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Funding Sources table
CREATE TABLE IF NOT EXISTS funding_sources (
    funding_id SERIAL PRIMARY KEY,
    funding_code VARCHAR(50) NOT NULL UNIQUE,
    funding_name VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Equipment table (main table)
CREATE TABLE IF NOT EXISTS equipment (
    equipment_id SERIAL PRIMARY KEY,
    inventory_code VARCHAR(50) NOT NULL UNIQUE,
    equipment_name VARCHAR(200) NOT NULL,
    equipment_type_id INTEGER NOT NULL,
    manufacturer_id INTEGER NOT NULL,
    model_number VARCHAR(100) NOT NULL,
    serial_number VARCHAR(100) NOT NULL,
    year_manufactured INTEGER,
    purchase_date DATE,
    installation_date DATE,
    commissioning_date DATE,
    warranty_expiry_date DATE,
    purchase_price DECIMAL(12,2),
    current_value DECIMAL(12,2),
    ownership_type VARCHAR(20) NOT NULL CHECK (ownership_type IN ('OWNED', 'LEASED', 'RENTAL')),
    room_id INTEGER NOT NULL,
    equipment_status VARCHAR(20) NOT NULL CHECK (equipment_status IN ('ACTIVE', 'MAINTENANCE', 'OUT_OF_SERVICE', 'DECOMMISSIONED')),
    condition_rating VARCHAR(20) NOT NULL CHECK (condition_rating IN ('EXCELLENT', 'GOOD', 'FAIR', 'POOR')),
    last_maintenance_date DATE,
    next_maintenance_date DATE,
    maintenance_frequency_days INTEGER,
    funding_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipment_type_id) REFERENCES equipment_types(equipment_type_id),
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(manufacturer_id),
    FOREIGN KEY (room_id) REFERENCES rooms(room_id),
    FOREIGN KEY (funding_id) REFERENCES funding_sources(funding_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_equipment_status ON equipment(equipment_status);
CREATE INDEX IF NOT EXISTS idx_equipment_type ON equipment(equipment_type_id);
CREATE INDEX IF NOT EXISTS idx_equipment_manufacturer ON equipment(manufacturer_id);
CREATE INDEX IF NOT EXISTS idx_equipment_room ON equipment(room_id);
CREATE INDEX IF NOT EXISTS idx_equipment_next_maintenance ON equipment(next_maintenance_date);
CREATE INDEX IF NOT EXISTS idx_equipment_inventory_code ON equipment(inventory_code);

-- Create trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_buildings_updated_at BEFORE UPDATE ON buildings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_departments_updated_at BEFORE UPDATE ON departments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_manufacturers_updated_at BEFORE UPDATE ON manufacturers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_equipment_types_updated_at BEFORE UPDATE ON equipment_types FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_funding_sources_updated_at BEFORE UPDATE ON funding_sources FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_equipment_updated_at BEFORE UPDATE ON equipment FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();