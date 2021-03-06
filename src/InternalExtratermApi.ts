/*
 * Copyright 2017 Simon Edwards <simon@simonzone.com>
 *
 * This source code is licensed under the MIT license which is detailed in the LICENSE.txt file.
 */
import * as PluginApi from './PluginApi';

export interface InternalExtratermApi extends PluginApi.ExtratermApi {
  setTopLevel(el: HTMLElement): void;
  addTab(el: HTMLElement): void;
  removeTab(el: HTMLElement): void;
}
