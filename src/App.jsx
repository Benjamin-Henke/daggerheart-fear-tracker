import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'}
import './App.css'

function App() {
  const [fear, setFear] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load fear value on component mount
  useEffect(() => {
    loadFear();
  }, []);

  const loadFear = async () => {
    try {
      const { data, error } = await supabase.from('fear-tracker')
        .select('fear_value')
        .eq('id', 1)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading fear:', error);
      } else if (data) {
        setFear(data.fear_value);
      }
    } catch (error) {
      console.error('Error loading Fear: ', error);
    } finally {
      setLoading(false);
    }
  };

  const saveFear = async (newFear) => {
    setSaving(true);
    try {
      const { error } = await supabase.from('fear_tracker')
        .upsert({
          id: 1,
          fear_value: newFear,
          updated_at: new Date().toISOString()
        });
    } catch (error) {
      console.error('Error saving Fear: ', error)
    } finally {
      setSaving(false);
    }
  }
}
