/**
 * This event is triggered by the most important actions through the Consent Management Platform
 * @see https://docs.usercentrics.com/#/v2-events?id=uc_ui_cmp_event
 */
export type UCUICMPEvent = CustomEvent<{
    source?: 'FIRST_LAYER' | 'SECOND_LAYER'
    type?: UCUICMPEventType
}>

export enum UCUICMPEventType {
    ACCEPT_ALL = 'ACCEPT_ALL',
    CMP_SHOWN = 'CMP_SHOWN',
    DENY_ALL = 'DENY_ALL',
    IMPRINT_LINK = 'IMPRINT_LINK',
    MORE_INFORMATION_LINK = 'MORE_INFORMATION_LINK',
    PRIVACY_POLICY_LINK = 'PRIVACY_POLICY_LINK',
    SAVE = 'SAVE',
}