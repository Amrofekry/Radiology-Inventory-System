import { pool } from './database.js';

export class DatabaseService {
  // Get all equipment
  static async getAllEquipment() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query(`
          SELECT 
            e.*,
            et.type_name,
            et.type_code,
            m.manufacturer_name,
            r.room_name,
            r.room_code,
            r.floor_number,
            d.dept_name,
            d.dept_code,
            b.building_name,
            b.building_code
          FROM equipment e
          LEFT JOIN equipment_types et ON e.equipment_type_id = et.equipment_type_id
          LEFT JOIN manufacturers m ON e.manufacturer_id = m.manufacturer_id
          LEFT JOIN rooms r ON e.room_id = r.room_id
          LEFT JOIN departments d ON r.department_id = d.department_id
          LEFT JOIN buildings b ON d.building_id = b.building_id
          ORDER BY e.equipment_id DESC
        `);
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching equipment:', error);
      throw new Error('Failed to fetch equipment data');
    }
  }

  // Add new equipment
  static async addEquipment(equipmentData) {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query(`
          INSERT INTO equipment (
            inventory_code, equipment_name, equipment_type_id, manufacturer_id,
            model_number, serial_number, year_manufactured, purchase_date,
            installation_date, warranty_expiry_date, purchase_price, current_value,
            ownership_type, room_id, equipment_status, condition_rating, funding_id
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
          RETURNING *
        `, [
          equipmentData.inventory_code,
          equipmentData.equipment_name,
          equipmentData.equipment_type_id,
          equipmentData.manufacturer_id,
          equipmentData.model_number,
          equipmentData.serial_number,
          parseInt(equipmentData.year_manufactured || new Date().getFullYear().toString(), 10),
          equipmentData.purchase_date || null,
          equipmentData.installation_date || null,
          equipmentData.warranty_expiry_date || null,
          parseFloat(equipmentData.purchase_price || '0'),
          parseFloat(equipmentData.current_value || '0'),
          equipmentData.ownership_type,
          equipmentData.room_id,
          equipmentData.equipment_status,
          equipmentData.condition_rating,
          equipmentData.funding_id || null
        ]);
        return result.rows[0];
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error adding equipment:', error);
      throw new Error('Failed to add equipment');
    }
  }

  // Update equipment
  static async updateEquipment(id, updates) {
    try {
      const client = await pool.connect();
      try {
        const setClause = Object.keys(updates)
          .map((key, index) => `${key} = $${index + 2}`)
          .join(', ');
        
        const values = [id, ...Object.values(updates)];
        
        const result = await client.query(`
          UPDATE equipment 
          SET ${setClause}
          WHERE equipment_id = $1
          RETURNING *
        `, values);
        
        return result.rows[0];
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error updating equipment:', error);
      throw new Error('Failed to update equipment');
    }
  }

  // Delete equipment
  static async deleteEquipment(id) {
    try {
      const client = await pool.connect();
      try {
        await client.query('DELETE FROM equipment WHERE equipment_id = $1', [id]);
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error deleting equipment:', error);
      throw new Error('Failed to delete equipment');
    }
  }

  // Get lookup data
  static async getManufacturers() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM manufacturers ORDER BY manufacturer_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching manufacturers:', error);
      throw new Error('Failed to fetch manufacturers');
    }
  }

  static async getEquipmentTypes() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM equipment_types ORDER BY type_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching equipment types:', error);
      throw new Error('Failed to fetch equipment types');
    }
  }

  static async getBuildings() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM buildings ORDER BY building_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching buildings:', error);
      throw new Error('Failed to fetch buildings');
    }
  }

  static async getDepartments() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM departments ORDER BY dept_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
      throw new Error('Failed to fetch departments');
    }
  }

  static async getRooms() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM rooms ORDER BY room_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw new Error('Failed to fetch rooms');
    }
  }

  static async getFundingSources() {
    try {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM funding_sources ORDER BY funding_name');
        return result.rows;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching funding sources:', error);
      throw new Error('Failed to fetch funding sources');
    }
  }
}