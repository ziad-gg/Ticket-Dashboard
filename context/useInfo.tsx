'use client'
import { createContext, useContext } from 'react';
import type { OptionalDashboardContext } from '@/types/types';

const InfoContext = createContext<OptionalDashboardContext>({});

export const useInfo = () => useContext(InfoContext);

export default InfoContext;
