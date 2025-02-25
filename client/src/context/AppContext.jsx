import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [credit, setCredit] = useState(false)

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()

  //Criar o login do usuário
  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        setCredit(data.credit);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };


  // Função para gerar imagem
  const generateImage = async (prompt) => {
    if (!user || !user._id) {
      toast.error("Usuário não autenticado. Por favor, faça login.");
      return;
    }
  
    try {
      const response = await axios.post(
        backendUrl + '/api/image/generate-image',
        { prompt, userId: user._id },
        {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500, // Qualquer status abaixo de 500 não dispara erro
        }
      );
  
      const { data, status } = response;
  
      // Se o status for 400 e o saldo for 0, redireciona para '/buy'
      if (status === 400) {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
        return;
      }
  
      // Se a operação foi bem-sucedida
      if (data.success) {
        loadCreditsData();
        return data.resulImage;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  
  



  //função para fazer logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loginTimestamp');
    setToken('');
    setUser(null);
    window.location.href = "/";
  }

  //Tempo para efetuar o logout da sessão
  useEffect(() => {
    if (token) {
      const expirationTime = 10800000; // 1 hora
      let loginTimestamp = localStorage.getItem('loginTimestamp');

      if (!loginTimestamp) {
        localStorage.setItem('loginTimestamp', Date.now().toString());
        loginTimestamp = Date.now();
      } else {
        loginTimestamp = parseInt(loginTimestamp, 10);
      }

      const elapsedTime = Date.now() - loginTimestamp;
      if (elapsedTime >= expirationTime) {
        // Se já passou do tempo, realiza o logout
        logout();
      } else {
        // Agenda o logout para o tempo restante
        const timeoutId = setTimeout(() => {
          logout();
        }, expirationTime - elapsedTime);

        // Limpa o timeout se o componente desmontar ou o token mudar
        return () => clearTimeout(timeoutId);
      }
    }
  }, [token]);


  useEffect(() => {
    if (token && backendUrl) {
      loadCreditsData();
    }
  }, [token, backendUrl])


  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    logout,
    generateImage
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider