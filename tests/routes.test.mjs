import test from 'node:test';import assert from 'node:assert/strict';import {normalizePathname} from '../src/lib/routes.ts';
test('Las redirecciones a directorios de Pages conservan títulos y modos de catálogo',()=>{for(const path of ['/cotizaciones','/favoritos','/ofertas','/buscar','/producto/televisor'])assert.equal(normalizePathname(path+'/'),path);assert.equal(normalizePathname('/'),'/');});
