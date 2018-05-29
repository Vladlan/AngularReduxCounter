import {compose, createStore, Store, StoreEnhancer} from 'redux';
import {AppState} from './app.state';
import {InjectionToken} from '@angular/core';
import { counterReducer as reducer } from '../counter/counter.reducer';

const devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
export function createAppStore(): Store<AppState> { return createStore<AppState, any, any, any>( reducer, compose(devtools) ); };

export const AppStore = new InjectionToken('App.store');
export const appStoreProviders = [ { provide: AppStore, useFactory: createAppStore } ];
