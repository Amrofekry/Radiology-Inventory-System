import { useState, useEffect } from 'react';
import { EQUIPMENT_DATA } from '../constants';
import type { Equipment, EquipmentFormData } from '../types';

export const useEquipment = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setEquipment(EQUIPMENT_DATA);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch equipment');
    } finally {
      setLoading(false);
    }
  };

  const addEquipment = async (equipmentData: EquipmentFormData) => {
    try {
      // Generate new ID
      const newId = Math.max(...equipment.map(e => e.equipment_id)) + 1;
      
      const newEquipment: Equipment = {
        equipment_id: newId,
        inventory_code: equipmentData.inventory_code,
        equipment_name: equipmentData.equipment_name,
        equipment_type_id: equipmentData.equipment_type_id,
        manufacturer_id: equipmentData.manufacturer_id,
        model_number: equipmentData.model_number,
        serial_number: equipmentData.serial_number,
        year_manufactured: equipmentData.year_manufactured ? parseInt(equipmentData.year_manufactured) : undefined,
        purchase_date: equipmentData.purchase_date || undefined,
        installation_date: equipmentData.installation_date || undefined,
        warranty_expiry_date: equipmentData.warranty_expiry_date || undefined,
        purchase_price: equipmentData.purchase_price ? parseFloat(equipmentData.purchase_price) : undefined,
        current_value: equipmentData.current_value ? parseFloat(equipmentData.current_value) : undefined,
        ownership_type: equipmentData.ownership_type,
        room_id: equipmentData.room_id,
        equipment_status: equipmentData.equipment_status,
        condition_rating: equipmentData.condition_rating,
        funding_id: equipmentData.funding_id || undefined,
      };

      setEquipment(prev => [newEquipment, ...prev]);
      return newEquipment;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to add equipment');
    }
  };

  const updateEquipment = async (id: number, updates: Partial<Equipment>) => {
    try {
      const updatedEquipment = equipment.find(item => item.equipment_id === id);
      if (!updatedEquipment) {
        throw new Error('Equipment not found');
      }

      const updated = { ...updatedEquipment, ...updates };
      setEquipment(prev => prev.map(item => 
        item.equipment_id === id ? updated : item
      ));
      return updated;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update equipment');
    }
  };

  const deleteEquipment = async (id: number) => {
    try {
      setEquipment(prev => prev.filter(item => item.equipment_id !== id));
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to delete equipment');
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return {
    equipment,
    loading,
    error,
    refetch: fetchEquipment,
    addEquipment,
    updateEquipment,
    deleteEquipment,
  };
};