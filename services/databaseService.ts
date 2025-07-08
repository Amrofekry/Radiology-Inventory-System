import { supabase } from '../lib/supabase';
import type { Equipment, EquipmentFormData } from '../types';

export class DatabaseService {
  // Get all equipment
  static async getAllEquipment(): Promise<Equipment[]> {
    try {
      const { data, error } = await supabase
        .from('equipment')
        .select(`
          *,
          equipment_types(type_name, type_code),
          manufacturers(manufacturer_name),
          rooms(room_name, room_code, floor_number,
            departments(dept_name, dept_code,
              buildings(building_name, building_code)
            )
          )
        `);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching equipment:', error);
      throw new Error('Failed to fetch equipment data');
    }
  }

  // Add new equipment
  static async addEquipment(equipmentData: EquipmentFormData): Promise<Equipment> {
    try {
      const { data, error } = await supabase
        .from('equipment')
        .insert([{
          ...equipmentData,
          purchase_price: parseFloat(equipmentData.purchase_price || '0'),
          current_value: parseFloat(equipmentData.current_value || '0'),
          year_manufactured: parseInt(equipmentData.year_manufactured || new Date().getFullYear().toString(), 10),
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error adding equipment:', error);
      throw new Error('Failed to add equipment');
    }
  }

  // Update equipment
  static async updateEquipment(id: number, updates: Partial<Equipment>): Promise<Equipment> {
    try {
      const { data, error } = await supabase
        .from('equipment')
        .update(updates)
        .eq('equipment_id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating equipment:', error);
      throw new Error('Failed to update equipment');
    }
  }

  // Delete equipment
  static async deleteEquipment(id: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('equipment')
        .delete()
        .eq('equipment_id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting equipment:', error);
      throw new Error('Failed to delete equipment');
    }
  }

  // Get lookup data
  static async getManufacturers() {
    const { data, error } = await supabase.from('manufacturers').select('*');
    if (error) throw error;
    return data || [];
  }

  static async getEquipmentTypes() {
    const { data, error } = await supabase.from('equipment_types').select('*');
    if (error) throw error;
    return data || [];
  }

  static async getBuildings() {
    const { data, error } = await supabase.from('buildings').select('*');
    if (error) throw error;
    return data || [];
  }

  static async getDepartments() {
    const { data, error } = await supabase.from('departments').select('*');
    if (error) throw error;
    return data || [];
  }

  static async getRooms() {
    const { data, error } = await supabase.from('rooms').select('*');
    if (error) throw error;
    return data || [];
  }

  static async getFundingSources() {
    const { data, error } = await supabase.from('funding_sources').select('*');
    if (error) throw error;
    return data || [];
  }
}