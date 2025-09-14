import { Big as Big_2 } from 'big.js';
import { BigSource } from 'big.js';
import { Consumer } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from 'big.js';
import { FC } from 'react';
import { JSX } from 'react/jsx-runtime';
import { Key } from 'react';
import { MemoExoticComponent } from 'react';
import { NamedExoticComponent } from 'react';
import { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import * as rq from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export declare type ActorMethodWithResult<OkType, ErrType> = (...args: any[]) => Promise<{
    Ok: OkType;
} | {
    Err: ErrType;
}>;

declare type AllowedData = object;

export declare const ApplyMaxDecimals: (value: Num, maxDecimals?: number) => Big_2;

declare type BackButtonProps = {
    children: ReactNode;
    onClick(): void;
};

declare type BannerProps = {
    children: ReactNode;
} & Omit<InteractableProps_2, 'style' | 'className'>;

export declare const BigIntTimestampToDate: (timestamp: bigint) => Date;

export declare const BigIntToBig: <Param extends bigint | undefined = bigint | undefined, Return = Param extends bigint ? default_3 : undefined>(amount: Param, decimals: number) => Return;

export declare const BigIntToString: (amount: bigint, decimals: number, renderedDecimalPlaces?: number) => string;

export declare const BigToBigInt: <Param extends default_3 | undefined = default_3 | undefined, Return = Param extends number ? bigint : undefined>(f: Param, decimals: number) => Return;

export declare const ButtonComponent: NamedExoticComponent<ButtonProps>;

export declare type ButtonField = {
    type: "button";
    label: ReactNode;
    defaultValue: never;
};

export declare type ButtonProps = {
    onClick?(): void;
    href?: string;
    children?: ReactNode;
    variant?: "filled" | "outline" | "naked" | "material";
    /** @deprecated use purpose instead; green -> primary, purple -> secondary, red -> error */
    color?: Color;
    purpose?: "primary" | "secondary" | "error";
    className?: string;
    isOutLink?: boolean;
    isLoading?: boolean;
};

export declare function callActorMutation<Actor extends object, MethodName extends keyof Actor, Method extends Actor[MethodName] extends ActorMethodWithResult<any, any> ? Actor[MethodName] : never>(actor: Actor, methodName: MethodName, ...args: Parameters<Method> extends [] ? [] : Parameters<Method>): Promise<Method extends ActorMethodWithResult<infer OkType, any> ? OkType : never>;

export declare const CardComponent: NamedExoticComponent<CardComponentProps>;

export declare type CardComponentProps = {
    index?: number;
    variant?: "large" | "small";
    image?: ReactNode;
    background?: ReactNode;
    items?: CardItemProps[];
    joinLabel?: ReactNode;
    joinUrl?: string;
    leftLabel?: ReactNode;
};

export declare type CardItemProps = {
    title: string;
    value: ReactNode;
    isHeader?: boolean;
};

export declare const CircularProgressBarComponent: NamedExoticComponent<    {
progress: number;
className: string;
}>;

declare type Color = "green" | "orange" | "black" | "purple" | "red" | "grey" | 'blue';

export declare const ConsumeModal: Consumer<ModalContextType>;

export declare const ContainerAvoidingElementContainer: NamedExoticComponent<    {
children: ReactNode | ReactNode[];
container: RefObject<HTMLDivElement>;
className?: string;
}>;

export declare const ConvertNat16ToPerc: (nat?: number) => number;

export declare const ConvertPercToNat16: (perc?: number) => number;

export declare const CopiableTextComponent: NamedExoticComponent<    {
text: string;
}>;

export declare const DateInputComponent: NamedExoticComponent<DateInputComponentProps>;

declare type DateInputComponentProps = {
    datetime_ns?: bigint;
    min_ns?: bigint;
    max_ns?: bigint;
    showSeconds?: boolean;
    showTime?: boolean;
    label?: ReactNode;
    onChange?: (date: bigint) => void;
};

export declare const DateToBigIntTimestamp: (date: Date) => bigint;

export declare const DateToBigNanoseconds: (date: Date) => bigint;

export declare const DateToLocalDateTimeString: (timestamp: bigint, format?: string) => string;

export declare const DragPanelComponent: NamedExoticComponent<PropsWithChildren<{
className?: string;
minSize?: {
width: number;
height: number;
};
shown?: boolean;
}>>;

export declare const DropdownComponent: NamedExoticComponent<DropdownComponentProps>;

export declare type DropdownComponentProps = {
    value?: string | number;
    placeholder?: string;
    isOpenInitially?: boolean;
    onChange: (value?: string | number) => void;
    options?: string[] | number[] | {
        value: string | number;
        label: string | ReactNode;
    }[];
    className?: string;
};

export declare type DropdownField = {
    type: "dropdown";
    label: ReactNode;
    defaultValue?: string | number;
    options?: DropdownComponentProps["options"];
};

export declare const DropdownInputComponent: NamedExoticComponent<DropdownInputComponentProps>;

declare type DropdownInputComponentProps = Omit<DropdownComponentProps, "className"> & {
    label?: ReactNode;
};

export declare const DynamicSizeComponent: NamedExoticComponent<PropsWithChildren<{
className?: string;
animateWidth?: boolean;
animateHeight?: boolean;
}>>;

export declare const ElementBoxProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;

export declare type Environment = "development" | "staging" | "production";

export declare let environment: Environment;

export declare type EnvMap<T> = Record<Environment, T>;

export declare const ErrorBoundaryComponent: default_2.MemoExoticComponent<() => JSX.Element>;

export declare const ErrorComponent: NamedExoticComponent<    {
error?: unknown;
title?: ReactNode;
className?: string;
isUserError?: boolean;
translucent?: boolean;
}>;

export declare const ErrorModalComponent: NamedExoticComponent<    {
children?: any;
title?: string;
onClose(): void;
}>;

export declare const ExperiencePointsComponent: NamedExoticComponent<    {
experience_points?: [] | [bigint];
className?: string;
size?: "big" | "medium" | "small";
}>;

export declare const FauxLoadingBarAnimationComponent: NamedExoticComponent<    {
dark?: boolean;
children?: ReactNode;
averageLoadingTimeInS?: number;
className?: string;
}>;

export declare type Field = TextField | ToggleField | NumberField | DropdownField | ButtonField | SliderField;

export declare const FieldComponent: NamedExoticComponent<FieldComponentProps<Field, boolean | BigSource | undefined>>;

export declare type FieldComponentProps<F extends Field = Field, V = F["defaultValue"]> = F & {
    value?: V;
    borderRadius?: "all" | "top" | "bottom";
    onChange: (value: any) => void;
};

export declare const FooterComponent: NamedExoticComponent<    {
fullWidth?: boolean;
}>;

export declare type FooterLink = InteractableProps & {
    label: string;
};

declare type FooterLink_2 = InteractableProps_2 & { label: string; };

declare type FooterProps = {
    children: ReactNode;
};

export declare const FormComponent: NamedExoticComponent<FormProps>;

export declare type FormProps = {
    fields: (Field & {
        /** Used to identify fields, useful if fields are replaced */
        name?: string;
    })[];
    values?: (string | boolean | Num_2 | undefined)[];
    onConfirm?: (values: (string | boolean | Num_2 | undefined)[]) => void;
    onChange?: (values: (string | boolean | Num_2 | undefined)[]) => void;
    onCancel?: () => void;
    cancelLabel?: ReactNode;
    cancelColor?: ButtonProps["color"];
    isLoading?: boolean;
    confirmLabel?: ReactNode;
    children?: ReactNode | ReactNode[];
};

declare type GeneralImageProps = {
    className?: string;
    alt: string;
};

export declare const HeroComponent: NamedExoticComponent<HeroComponentProps>;

export declare type HeroComponentProps = PropsWithChildren<{
    title: ReactNode;
    subTitle?: ReactNode;
    image?: ImageProps;
    mobileImage?: ImageProps;
    ctas?: PillProps[];
}>;

export declare const IC_HOST: string;

declare const Image_2: NamedExoticComponent<ImageProps>;
export { Image_2 as Image }

export declare type ImageProps = GeneralImageProps & (RasterizedImageProps | VectorizedImageProps);

export declare const InlineMarkdownComponent: NamedExoticComponent<    {
children: string;
}>;

export declare const InputWrapperComponent: NamedExoticComponent<PropsWithChildren<Props>>;

export declare const Interactable: NamedExoticComponent<InteractableProps & {
children?: ReactNode | undefined;
} & RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export declare type InteractableProps = {
    href?: string;
    onClick?(): void;
    disabled?: boolean;
    isSubmit?: boolean;
    isOutLink?: boolean;
    className?: string;
    style?: CSSProperties;
    eventName?: string;
};

declare type InteractableProps_2 = {
    href?: string;
    onClick?(): void;
    disabled?: boolean;
    isSubmit?: boolean;
    isOutLink?: boolean;
    className?: string;
    style?: CSSProperties;
    eventName?: string;
};

export declare const IsDev: boolean;

export declare const IsInteractableEnabled: (props: InteractableProps) => boolean;

export declare function IsOptional<T>(t: T | Optional<T>): t is Optional<T>;

export declare const Label: NamedExoticComponent<PropsWithChildren<LabelProps>>;

export declare type LabelProps = {
    ctas?: (InteractableProps & {
        label: ReactNode;
    })[];
    for?: string;
};

export declare const LayoutComponent: NamedExoticComponent<PropsWithChildren<LayoutProps>>;

export declare type LayoutConfig = {
    footerLinks: FooterLink_2[];
    NavbarUserComponent: FC;
    isOverlay?: boolean;
    hideUser?: boolean;
    navbarTabs: Tab_2[];
    navbarRightSide?: ReactNode;
};

declare type LayoutOverride<T extends LayoutProps, P extends NestedPaths<T>> = {
    path: P;
    value: ValueAtPath<T, P>;
};

export declare const LayoutOverrideComponent: NamedExoticComponent<LayoutOverride<LayoutProps, "className" | "footer" | "container" | "navbar" | "isFullScreen" | "hero" | undefined>>;

declare type LayoutProps = {
    navbar?: NavbarComponentProps;
    container?: "default" | "large";
    isFullScreen?: boolean;
    className?: string;
    footer?: boolean;
    hero?: HeroComponentProps;
};

export declare const LayoutProvider: NamedExoticComponent<    {
children?: ReactNode | undefined;
}>;

export declare const LinearProgressBarComponent: NamedExoticComponent<    {
progress: number;
className?: string;
}>;

export declare type LinkTab = {
    type: "link";
    label: string;
    href?: string;
    onClick?: () => void;
    comingSoon?: boolean;
};

declare type LinkTab_2 = {
    type: "link";
    label: string;
    href?: string;
    onClick?: () => void;
    comingSoon?: boolean;
};

export declare const List: NamedExoticComponent<PropsWithChildren<ListProps>>;

export declare const ListHeader: NamedExoticComponent<Omit<ListHeaderProps, "type">>;

export declare type ListHeaderProps = {
    type: "header";
    description?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    rightSide?: ReactNode;
};

export declare const ListItem: NamedExoticComponent<ListItemProps>;

export declare type ListItemProps = PropsWithChildren<{
    type?: "item";
    icon?: ReactNode;
    href?: string;
    rightLabel?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    onClick?(): void;
    modal?: Omit<ModalProps, 'open' | 'onClose'>;
    list?: SublistProps;
    direction?: "row" | "column";
}> | {
    type: "seperator";
} | ListHeaderProps;

export declare type ListProps = {
    label?: ReactNode;
    ctas?: LabelProps["ctas"];
    variant?: ListVariant;
    className?: string;
    items?: ListItemProps[];
};

export declare const ListSeperator: MemoExoticComponent<() => JSX.Element>;

declare type ListVariant = {
    type: "default";
    readonly?: boolean;
    variant?: 'alert';
} | {
    type: "droppel";
    side: "right" | "left";
};

export declare const LoadingAnimationComponent: NamedExoticComponent<    {
dark?: boolean;
children?: ReactNode;
className?: string;
variant?: "spinner" | "shimmer";
hideDots?: boolean;
}>;

export declare const LoadingModal: NamedExoticComponent<    {
children?: ReactNode;
}>;

export declare const LoadingSpinnerComponent: NamedExoticComponent<    {
className?: string;
}>;

export declare const MarkdownPageComponent: NamedExoticComponent<    {
children: string;
className: string;
}>;

/**
 * matchRustEnum takes a single-key union (e.g. {A: number}|{B: string})
 * and returns another function that forces you to provide a "cases" object:
 *
 *   { A: (payload: number) => R, B: (payload: string) => R }
 *
 * The result is whichever handler is called at runtime.
 */
export declare function matchRustEnum<T extends {
    [key: string]: unknown;
}>(value: T): <R>(cases: { [K in TagOf<T>]: (payload: PayloadOf<T, K>) => R; }) => R;

export declare const Max: (...bigints: bigint[]) => bigint;

export declare const Min: (...bigints: bigint[]) => bigint;

export declare const Modal: NamedExoticComponent<ModalProps>;

export declare const ModalBackButtonPortal: NamedExoticComponent<    {
children: ReactNode;
onClick(): void;
}>;

declare type ModalContextType = {
    setFooter(item: FooterProps & {
        id: string;
    }): void;
    removeFooter(id: string): void;
    setTitle(item: TitleProps & {
        id: string;
    }): void;
    removeTitle(id: string): void;
    setBackButton(item: BackButtonProps & {
        id: string;
    }): void;
    removeBackButton(id: string): void;
    modalId?: string;
    title?: string;
    registerChildModal?(id: string): void;
    unregisterChildModal?(id: string): void;
    close(): void;
};

export declare const ModalFooterPortal: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare type ModalProps = {
    title?: ReactNode;
    children?: ReactNode;
    open?: boolean;
    onClose?(): void;
    contentClassName?: string;
    /** give it as gap-[n] */
    contentGap?: string;
};

export declare const ModalTitlePortal: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare const MouseHighlightComponent: NamedExoticComponent<PropsWithChildren<{
className?: string;
}>>;

export declare const nanosecondsToString: (nanoseconds: bigint) => string;

export declare const NavbarComponent: NamedExoticComponent<NavbarComponentProps>;

export declare type NavbarComponentProps = {
    hideUser?: boolean;
};

export declare const NavbarTabComponent: NamedExoticComponent<Tab>;

export declare const NavbarTabsComponent: NamedExoticComponent<    {
variant?: "tabs" | "droppel";
}>;

declare type NestedPaths<T> = T extends object ? {
    [K in keyof T]: K extends string ? T[K] extends object ? K | `${K}.${NestedPaths<T[K]>}` : K : never;
}[keyof T] : never;

export declare type Num = BigSource;

declare type Num_2 = BigSource;

export declare type NumberField = {
    type: "number";
} & NumberInputValue;

export declare const NumberInputComponent: NamedExoticComponent<NumberInputProps>;

declare type NumberInputProps = NumberInputValue & {
    onChange?(number: number): void;
    onChangeBigFloat?(number: default_3): void;
    value?: Num;
    className?: string;
};

export declare type NumberInputValue = {
    disabled?: boolean;
    /** @deprecated it is now by default showing in list, use hideLabelInList to hide the label */
    showLabelInList?: boolean;
    hideLabelInList?: boolean;
    label?: ReactNode;
    defaultValue?: Num;
    symbol?: ReactNode;
    min?: Num;
    max?: Num;
    step?: Num;
    minQuickAction?: boolean;
    maxQuickAction?: boolean;
    maxDecimals?: number;
    hideClear?: boolean;
    quickActions?: {
        label: string;
        value: Num;
    }[];
};

export declare type Optional<T> = [T] | [];

export declare const OverrideLayoutConfigComponent: NamedExoticComponent<PropsWithChildren<Partial<LayoutConfig>>>;

export declare const PaginationComponent: NamedExoticComponent<    {
className?: string;
totalPages: number;
currentPage: number;
onPageChange: (page: number) => void;
}>;

/**
 * For a given union `T` and a specific tag `K`, `PayloadOf<T, K>`
 * is the payload type of that tag. For instance, if T is:
 *   { A: number } | { B: string },
 * then:
 *   PayloadOf<T, "A"> = number
 *   PayloadOf<T, "B"> = string
 */
export declare type PayloadOf<T, K extends PropertyKey> = T extends {
    [P in K]: infer V;
} ? V : never;

export declare const PhotoInputComponent: NamedExoticComponent<PhotoInputProps>;

export declare type PhotoInputProps = {
    label: ReactNode;
    value?: File | null;
    error?: string;
    onChange: (value?: File) => void;
};

export declare const PillComponent: NamedExoticComponent<PillProps>;

export declare type PillProps = {
    children?: ReactNode;
    size?: "small" | "large";
    filled?: boolean;
    className?: string;
    straightRight?: boolean;
    straightLeft?: boolean;
    isLoading?: boolean;
} & Omit<InteractableProps, "style" | "className">;

export declare type PokerError = {
    [key: string]: any;
};

declare type Props = {
    label?: ReactNode;
    className?: string;
    showClear?: boolean;
    onClear?(): void;
    isRight?: boolean;
    isFixedHeight?: boolean;
    rightPadding?: boolean;
    quickActions?: {
        label: string;
        action(): void;
    }[];
};

declare type Props_2 = {
    children: ReactNode;
    title: ReactNode;
    cancelLabel?: ReactNode;
    confirmLabel?: ReactNode;
};

export declare const ProvideConfirmModal: NamedExoticComponent<    {
children?: ReactNode | undefined;
}>;

export declare const ProvideErrorModalContext: NamedExoticComponent<    {
children?: ReactNode | undefined;
}>;

export declare const ProvideLayoutConfig: NamedExoticComponent<PropsWithChildren<LayoutConfig>>;

export declare const ProvideModalStack: NamedExoticComponent<    {
children: React.ReactNode;
}>;

export declare const ProvideQuery: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare const ProvideTheme: NamedExoticComponent<PropsWithChildren<ThemeContextValue>>;

export declare const ProvideUI: NamedExoticComponent<PropsWithChildren<UIConfig>>;

export declare const QRCodeComponent: NamedExoticComponent<    {
className?: string;
value?: string;
}>;

export declare const queryClient: QueryClient;

export declare type QueryKeyFactory<Args extends Array<unknown> = Array<unknown>, QueryKey extends Array<unknown> = Array<unknown>> = {
    key: (...args: Args) => QueryKey;
    invalidate: (...args: Args) => void;
    reset: (...args: Args) => void;
};

export declare function queryKeyFactory<Args extends Array<unknown> = Array<unknown>, QueryKey extends Array<unknown> = Array<unknown>>(key: (...args: Args) => QueryKey): QueryKeyFactory<Args, QueryKey>;

declare type RasterizedImageProps = {
    type: "png" | "jpg";
    src: string;
    /** @default is 3 */
    sizes?: number;
    /** The width of the actual asset (the original not the extra sizes @2/3...) */
    width: number;
    /** The height of the actual asset (the original not the extra sizes @2/3...) */
    height: number;
};

export declare const RawNumberInputComponent: NamedExoticComponent<RawNumberInputValue & RefAttributes<RawNumberInputRef>>;

export declare interface RawNumberInputRef {
    setInternalValue: (value: Num | undefined) => void;
    getInternalValue: () => Big_2 | undefined;
    clear: () => void;
    focus: () => void;
}

export declare type RawNumberInputValue = {
    disabled?: boolean;
    placeholder?: string;
    defaultValue?: Num;
    min?: Num;
    max?: Num;
    step?: Num;
    maxDecimals?: number;
    pad?: number;
    orientation?: 'left' | 'right';
    onChange?(number: number): void;
    onChangeBigFloat?(number: Big_2): void;
    value?: Num;
    className?: string;
};

export { rq }

export declare const SafeNumber: (value: Num, fallback?: Big_2) => Big_2;

/** Only works in screen and overflow hidden containers */
export declare const ScreenAvoidingElement: NamedExoticComponent<    {
children: ReactNode | ReactNode[];
container?: RefObject<HTMLDivElement>;
className?: string;
}>;

export declare const secondsToLabel: (seconds: number) => string;

export declare const secondsToString: (seconds: bigint) => string;

export declare const SelectEnv: <T>(data: EnvMap<T>) => T;

export declare type SeperatorTab = {
    type: "seperator";
};

declare type SeperatorTab_2 = { type: "seperator" };

declare type Size = Pick<ResizeObserverEntry["contentRect"], "height" | "width">;

export declare type SliderField = {
    type: "slider";
    label: ReactNode;
    defaultValue?: never;
} & SliderInputValue;

export declare const SliderInputComponent: NamedExoticComponent<SliderInputComponentProps>;

declare type SliderInputComponentProps = SliderInputValue & {
    value: number;
    onChange: (value: number) => void;
};

export declare type SliderInputValue = {
    min?: number;
    max?: number;
    step?: number;
    label?: ReactNode;
};

export declare const SmallHeroComponent: NamedExoticComponent<    {
onBack?(): void;
title: string;
subtitle?: string;
icon?: ImageProps;
className?: string;
}>;

export declare type StepComponentProps<T extends AllowedData, LocalState = unknown> = {
    data: Partial<T>;
    patch: (v: Partial<T>) => void;
    localState: LocalState;
    patchLocalState: (v: Partial<LocalState>) => void;
};

export declare function SteppedModalComponent<T extends AllowedData, LocalState = unknown>({ steps: propsSteps, mutate, error, isPending, reset, open, onClose, initialStep, submitLabel, initialData, }: SteppedModalProps<T>): JSX.Element;

export declare type SteppedModalProps<T extends AllowedData> = {
    steps: SteppedModalStep<T>[];
    mutate(data: T): any;
    error?: unknown;
    isPending?: boolean;
    reset?(): void;
    submitLabel?: ReactNode;
    initialStep?: number;
    initialData?: Partial<T>;
} & Pick<ModalProps, 'open' | 'onClose'>;

export declare type SteppedModalStep<T extends AllowedData, LocalState = unknown> = {
    title: string;
    Component: React.ComponentType<StepComponentProps<T, LocalState>>;
    isValid: (v: Partial<T>, localState: LocalState) => true | unknown[];
    defaultValues: Partial<T>;
    applyLocalState?: (v: Partial<T>, localState: LocalState) => Partial<T>;
    deriveLocalState?: (v: Partial<T>) => Partial<LocalState>;
    enabled?: (v: Partial<T>) => boolean;
};

export declare const StickyToastComponent: NamedExoticComponent<Omit<ToastComponentProps, "sticky">>;

declare type SublistProps = Pick<ListProps, 'label' | 'ctas' | 'items'>;

export declare const SwitchComponent: NamedExoticComponent<SwitchComponentProps>;

export declare type SwitchComponentProps = {
    checked?: boolean;
    onChange?(checked: boolean): void;
    disabled?: boolean;
};

export declare const SwitchInputComponent: NamedExoticComponent<SwitchProps>;

declare type SwitchProps = {
    label?: ReactNode;
} & SwitchComponentProps;

export declare type Tab = (SeperatorTab | LinkTab) & {
    mobileOnly?: boolean;
};

declare type Tab_2 = (SeperatorTab_2 | LinkTab_2) & { mobileOnly?: boolean };

export declare function TabsComponent<Value extends Key>({ tabs, value, onChange, className, variant, }: TabsComponentProps<Value>): JSX.Element;

export declare type TabsComponentProps<Value extends Key> = {
    tabs: {
        value: Value;
        label: ReactNode;
        disabled?: boolean;
    }[];
    value: Value;
    className?: string;
    onChange(active: Value): void;
    variant?: "tabs" | "buttons";
};

export declare function TabsInputComponent<Value extends Key>({ label, ...tabsProps }: Omit<TabsComponentProps<Value>, 'variant'> & {
    label?: ReactNode;
}): JSX.Element;

/**
 * If you have a union type like:
 *
 *   type Foo =
 *     | { A: number }
 *     | { B: string }
 *     | { C: { x: boolean } };
 *
 * then `TagOf<Foo>` becomes "A" | "B" | "C".
 */
export declare type TagOf<T> = T extends any ? keyof T : never;

export declare type TextField = {
    type: "text" | "email";
    label: ReactNode;
    defaultValue?: string;
    error?: string;
};

export declare const TextInputComponent: NamedExoticComponent<TextInputProps>;

export declare type TextInputProps = {
    label: ReactNode;
    defaultValue?: string;
    value?: string;
    type?: "text" | "email";
    error?: string;
    icon?: ReactNode;
    isArea?: boolean;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    pattern?: string;
    onChange?(value: string): void;
};

export declare type Theme = typeof Themes[number];

export declare type ThemeContextValue = {
    isDark: boolean;
};

export declare const Themes: readonly ["zkpoker", "purepoker"];

export declare const TimeInputComponent: NamedExoticComponent<TimeInputComponentProps>;

declare type TimeInputComponentProps = {
    nanoseconds?: bigint;
    seconds?: bigint;
    maxHours?: bigint;
    label?: ReactNode;
    hideHours?: boolean;
    showSeconds?: boolean;
    onChangeNanoseconds?: (nanoseconds: bigint) => void;
    onChangeSeconds?: (nanoseconds: bigint) => void;
};

declare type TitleProps = {
    children: ReactNode;
};

export declare const TitleTextComponent: NamedExoticComponent<    {
title?: ReactNode;
text?: ReactNode;
leftAligned?: boolean;
className?: string;
}>;

export declare const ToastComponent: NamedExoticComponent<ToastComponentProps>;

export declare type ToastComponentProps = {
    ctas?: PropsWithChildren<Omit<InteractableProps, "style" | "className"> & {
        isLoading?: boolean;
    }>[];
    error?: unknown;
    children?: ReactNode;
};

export declare const ToastProvider: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare const ToggleComponent: NamedExoticComponent<PropsWithChildren<{
isOn: boolean;
onChange(isOn: boolean): void;
className?: string;
}>>;

export declare type ToggleField = {
    type: "toggle";
    label: ReactNode;
    defaultValue?: boolean;
};

export declare const TooltipComponent: NamedExoticComponent<    {
className?: string;
overlayClassName?: string;
children: ReactNode;
title?: ReactNode;
}>;

declare type TrackableElement = HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | HTMLDialogElement | null;

export declare const TransferLoadingIndicatorComponent: NamedExoticComponent<PropsWithChildren<{
isTransferring: boolean;
isProcessing: boolean;
}>>;

export declare type UIConfig = {
    theme: Theme;
    banner?: BannerProps;
};

export declare function UnwrapOptional<T>(t?: Optional<T>): T | undefined;

export declare const useConfig: () => UIConfig;

export declare const useConfirmModal: () => (options: Omit<Props_2, "children">, ...children: ReactNode[]) => Promise<void>;

export declare const useCopyToClipboard: (url?: string) => () => void;

export declare const useCurrentModalStackIndex: (isOpen: boolean) => number;

export declare const useElementBox: (_el: RefObject<TrackableElement>) => Size;

export declare const useElementSize: (_el: RefObject<TrackableElement>, options?: {
    log?: boolean;
}) => Partial<Size & Pick<HTMLDivElement, "clientWidth" | "clientHeight" | "scrollWidth" | "scrollHeight" | "offsetHeight" | "offsetWidth"> & {
    isScrollableX: boolean;
    isScrollableY: boolean;
}>;

export declare const useErrorModal: () => (error: any) => void;

export declare const useIsInList: () => boolean;

export declare const useIsInsideModal: () => boolean;

export declare const useIsMobile: () => boolean;

export declare const useLayout: () => LayoutProps;

export declare const useLayoutConfig: () => LayoutConfig & {
    override(id: string, config: Partial<LayoutConfig>): () => void;
};

export declare const useModal: () => ModalContextType;

export { useMutation }

export declare const useOverrideLayout: <T extends LayoutProps, P extends NestedPaths<T>>(path: P, value: ValueAtPath<T, P>) => void;

export declare const useOverrideLayoutConfig: (value: Partial<LayoutConfig>) => void;

export declare const usePersistentState: <S>(key: string, defaultValue?: S) => [S, (value: S) => void];

export { useQuery }

export { useQueryClient }

export declare class UserError extends Error {
    readonly isUserError = true;
    constructor(message: string);
}

export declare const useRouting: () => {
    push: (path: string) => void;
    getHref: (path: string) => string;
};

export declare const useScreenSize: () => {
    width: number;
    height: number;
};

export declare const useTheme: () => ThemeContextValue;

export declare const useToast: () => {
    addToast(props: ToastComponentProps): void;
    addStickyToast(props: ToastComponentProps, id?: string): () => void;
};

declare type ValueAtPath<T, P extends string> = P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends NestedPaths<T[Key]> ? ValueAtPath<T[Key], Rest> : never : never : P extends keyof T ? T[P] : never;

declare type VectorizedImageProps = {
    type: "svg";
    src: string;
};

export declare class WalletTypeNotInstalledError extends UserError {
    readonly walletType: any;
    constructor(walletType: any);
}

export declare const WeirdKnobComponent: NamedExoticComponent<WeirdKnobProps>;

export declare type WeirdKnobProps = {
    variant?: "red" | "gray" | "black" | "orange" | "transparent" | 'green';
    children: ReactNode;
    hoverLabel?: ReactNode;
    straightRightMobile?: boolean;
    straightLeftMobile?: boolean;
    hideOnMobile?: boolean;
    isPending?: boolean;
    mutate?(): void;
    href?: string;
};

export declare function WrapOptional<T>(t?: T | undefined): Optional<T>;

export declare const XP_DECIMALS = 0;

export { }
