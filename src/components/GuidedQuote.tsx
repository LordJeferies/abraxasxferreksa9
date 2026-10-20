import {useEffect,useRef} from 'react';
import {mountQuote} from '../lib/quoteWizard';
import {useStore} from '../lib/store';
import {products} from '../data/catalog';
export function GuidedQuote(){const host=useRef<HTMLDivElement>(null);const {state}=useStore();const current=useRef(state);current.current=state;useEffect(()=>{if(!host.current)return;return mountQuote(host.current,{assetBase:'/abraxasxferreksa9/assets/',view3DBase:'/abraxasxferreksa9/cotizaciones',storageKey:'ferreksa-guided-v9',getExtras:()=>[...current.current.custom.map(x=>`• ${x.quantity} ${x.unit}: ${x.name}${x.note?' — '+x.note:''}`),...current.current.cart.map(x=>`• ${x.quantity} unidades: ${products.find(p=>p.id===x.productId)?.name||'Referencia de catálogo'}; confirmar modelo real`)]});},[]);useEffect(()=>{window.dispatchEvent(new Event('ferreksa:quote-update'));},[state.custom,state.cart]);return <div id="cotizador-guiado" ref={host}/>}
