import { useState, useEffect } from 'react';
import { DatabaseService } from '../services/databaseService';
import type { Equipment, EquipmentFormData } from '../types';

export const useEquipment = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      const data = await DatabaseService.getAllEquipment();
      setEquipment(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch equipment');
    } finally {
      setLoading(false);
    }
  };

  const addEquipment = async (equipmentData: EquipmentFormData) => {
    try {
      const newEquipment = await DatabaseService.addEquipment(equipmentData);
      setEquipment(prev => [newEquipment, ...prev]);
      return newEquipment;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to add equipment');
    }
  };

  const updateEquipment = async (id: number, updates: Partial<Equipment>) => {
    try {
      const updatedEquipment = await DatabaseService.updateEquipment(id, updates);
      setEquipment(prev => prev.map(item => 
        item.equipment_id === id ? updatedEquipment : item
      ));
      return updatedEquipment;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update equipment');
    }
  };

  const deleteEquipment = async (id: number) => {
    try {
      await DatabaseService.deleteEquipment(id);
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