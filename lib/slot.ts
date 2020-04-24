export enum Slot {
    PRODUCTION = "PRODUCTION",
    SPECIALIZATION = "SPECIALIZATION"
}

export function slotFromRawValue(slotAffinityValue: string): Slot | undefined {
    switch (slotAffinityValue) {
        case "Specialization":
            return Slot.SPECIALIZATION
    }
}