export const login = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Realizar la solicitud a la API
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      body: formData,
      headers: {
        // Content-Type necesario solo si no usas FormData
        'Accept': 'application/json',
      },
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Procesar los datos de la respuesta
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);

    // Redirigir al home después de iniciar sesión
    window.location.href = 'http://localhost:4321/';

    return response.status;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error; // Puedes manejar este error en la UI del frontend para mostrar un mensaje
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');

    // Si no hay token, simplemente redirigir al login
    if (!token) {
      return redirectIfNotAuthenticated();
    }

    // Realizar la solicitud de logout a la API
    const response = await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Eliminar el token del localStorage después del logout
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Redirigir al login después del logout
    redirectIfNotAuthenticated();

    return response.status;
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

export const redirectIfNotAuthenticated = () => {
    //Remover local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    //Redirigir al login
    window.location.href = '/inicio-sesion';
  };

  export const userAuthValidate = async () => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (!token) {
        // Si no hay token, redirige al login
        window.location.href = '/inicio-sesion';
    }
};

