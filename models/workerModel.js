const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const worker = {
  async createworker(nombre, puesto) {
    const { data, error } = await supabase
      .from('empleados')
      .insert([{ nombre, puesto }])
      .select();
    return { data, error };
  },

  async getAllworkers() {
    const { data, error } = await supabase
      .from('empleados')
      .select('*');
    return { data, error };
  },

  async getworkerById(id) {
    const { data, error } = await supabase
      .from('empleados')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  async updateworker(id, nombre, puesto) {
    const { data, error } = await supabase
      .from('empleados')
      .update({ nombre, puesto })
      .eq('id', id)
      .select();
    return { data, error };
  },

  async deleteworker(id) {
    const { data, error } = await supabase
      .from('empleados')
      .delete()
      .eq('id', id);
    return { data, error };
  }
};

module.exports = worker;
