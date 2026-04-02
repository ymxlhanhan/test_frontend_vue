
export const StoreTypes = {
    LOCAL: 'local',
    SESSION: 'session',
    MEMORY: 'memory',
} as const;

export type StoreType = typeof StoreTypes[keyof typeof StoreTypes];
