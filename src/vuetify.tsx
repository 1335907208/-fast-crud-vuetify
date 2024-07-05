import "vue/jsx";
import type {
  TextAreaCI,
  CI,
  UiInterface,
  DialogCI,
  TableColumnCI,
  Icons,
  IconCI,
  TableCI,
  SelectCI,
  MessageCI,
  NotificationCI,
  MessageBoxCI,
  InputCI,
  OptionCI,
  FormWrapperCI,
  FormItemCI,
  DrawerCI,
  CheckboxCI,
  RadioCI,
  RadioGroupCI,
  TagCI,
  CheckboxGroupCI,
  CascaderCI,
  SwitchCI,
  InputPasswordCI,
  InputGroupCI,
  DatePickerCI,
  TimePickerCI,
  DropdownCI,
  DropdownMenuCI,
  DropdownItemCI,
  ImageGroupCI,
  ImageCI,
  ProgressCI,
  LoadingCI,
  UploadCI,
  TreeSelectCI,
  TabsCI,
  TabPaneCI,
  CollapseCI,
  CollapseItemCI,
  ButtonCI,
  PaginationCI,
  DividerCI,
  FormCI,
  PopoverCI,
  TooltipCI,
  InputNumberCI,
  BadgeCI,
  CollapseTransitionCI,
  ButtonGroupCI,
  ColCI,
  RowCI,
  CardCI,
  TableScrollReq,
  RadioButtonCI,
  FsUiFormItemContext
} from "@fast-crud/ui-interface";
import { useUiRender } from "@fast-crud/ui-interface";
// @ts-ignore
import _, { isFunction } from "lodash-es";
import { computed, ref } from "vue";

export type VuetifyUiProvider = {
  // Vuetify doesn't have global notification or message systems like Element Plus
};

const { buildBinding, creator } = useUiRender();
export class Vuetify implements UiInterface {
  constructor(target?: VuetifyUiProvider) {
    // Vuetify doesn't have global notification or message systems like Element Plus
  }
  tableColumnGroup: TableColumnCI;
  formItem: FormItemCI;
  treeSelect: TreeSelectCI;
  collapseTransition: CollapseTransitionCI;
  cascader: CascaderCI;

  type = "vuetify";
  modelValue = "modelValue";

  switch: SwitchCI = creator<SwitchCI>({
    name: "v-switch",
    modelValue: "modelValue",
    activeColor: "color",
    activeText: "trueValue",
    activeValue: "trueValue",
    inactiveColor: "falseColor",
    inactiveText: "falseValue",
    inactiveValue: "falseValue"
  });

  formWrapper: FormWrapperCI = creator<FormWrapperCI>({
    visible: "modelValue",
    customClass: (is: string) => {
      return "class";
    },
    titleSlotName: "title",
    buildOnClosedBind(is: string, onClosed: Function) {
      return { onClosed };
    },
    buildWidthBind(is, width) {
      return { width: width };
    },
    buildInitBind(is) {
      return {};
    },
    buildInnerBind() {
      return {};
    },
    name: "v-dialog"
  });

  messageBox: MessageBoxCI = creator<MessageBoxCI>({
    name: "v-dialog",
    instance: undefined,
    open: async (context) => {
      // Vuetify doesn't have a built-in message box, you might need to implement your own
      console.warn("MessageBox not implemented in Vuetify");
    },
    confirm: async (context) => {
      // Vuetify doesn't have a built-in confirm dialog, you might need to implement your own
      console.warn("Confirm dialog not implemented in Vuetify");
    }
  });

  message: MessageCI = creator<MessageCI>({
    instance: undefined,
    name: "v-snackbar",
    open: (context) => {
      console.warn("Message not implemented in Vuetify");
    },
    success: (msg) => {
      console.warn("Success message not implemented in Vuetify");
    },
    error: (msg) => {
      console.warn("Error message not implemented in Vuetify");
    },
    warn: (msg) => {
      console.warn("Warning message not implemented in Vuetify");
    },
    info: (msg) => {
      console.warn("Info message not implemented in Vuetify");
    }
  });

  notification: NotificationCI = creator<NotificationCI>({
    instance: undefined,
    name: "v-snackbar",
    open: (context) => {
      console.warn("Notification not implemented in Vuetify");
    },
    success: (msg) => {
      console.warn("Success notification not implemented in Vuetify");
    },
    error: (msg) => {
      console.warn("Error notification not implemented in Vuetify");
    },
    warn: (msg) => {
      console.warn("Warning notification not implemented in Vuetify");
    },
    info: (msg) => {
      console.warn("Info notification not implemented in Vuetify");
    }
  });

  icon: IconCI = creator<IconCI>({
    name: "v-icon",
    isComponent: true
  });

  icons: Icons = {
    add: "mdi-plus",
    columnsFilter: "mdi-filter",
    compact: "mdi-view-compact",
    edit: "mdi-pencil",
    remove: "mdi-delete",
    search: "mdi-magnify",
    refresh: "mdi-refresh",
    export: "mdi-export",
    check: "mdi-check",
    sort: "mdi-sort",
    left: "mdi-chevron-left",
    right: "mdi-chevron-right",
    close: "mdi-close",
    arrowLeft: "mdi-arrow-left",
    arrowRight: "mdi-arrow-right",
    more: "mdi-dots-horizontal",
    plus: "mdi-plus",
    zoomIn: "mdi-magnify-plus",
    zoomOut: "mdi-magnify-minus",
    refreshLeft: "mdi-refresh",
    refreshRight: "mdi-refresh",
    upload: "mdi-upload",
    fullScreen: "mdi-fullscreen",
    unFullScreen: "mdi-fullscreen-exit",
    question: "mdi-help-circle",
    caretUp: "mdi-chevron-up",
    caretDown: "mdi-chevron-down",
    eye: "mdi-eye",
    info: "mdi-information"
  };

  dialog: DialogCI = creator<DialogCI>({
    name: "v-dialog",
    visible: "modelValue",
    customClass: "class",
    titleSlotName: "title",
    footerSlotName: "actions",
    buildOnClosedBind(onClosed) {
      return { "onUpdate:modelValue": onClosed };
    },
    footer() {
      return {};
    },
    open(opts) {
      console.warn("Dialog open method not implemented in Vuetify");
    },
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          width: opts.width
        },
        slots: {
          actions: opts.footer
        }
      });
    }
  });

  buttonGroup = creator<ButtonGroupCI>({
    name: "v-btn-toggle"
  });

  col = creator<ColCI>({
    name: "v-col"
  });

  row = creator<RowCI>({
    name: "v-row"
  });

  card = creator<CardCI>({
    name: "v-card"
  });

  checkboxGroup: CheckboxGroupCI = creator<CheckboxGroupCI>({
    name: "v-item-group",
    modelValue: "modelValue"
  });

  checkbox: CheckboxCI = creator<CheckboxCI>({
    name: "v-checkbox",
    resolveEvent(e: any) {
      return e;
    },
    modelValue: "modelValue",
    value: "value",
    onChange(callback: (e: any) => void) {
      return {
        "onUpdate:modelValue": callback
      };
    }
  });

  drawer: DrawerCI = creator<DrawerCI>({
    name: "v-navigation-drawer",
    visible: "modelValue",
    customClass: "class",
    width: "width"
  });

  option: OptionCI = creator<OptionCI>({
    name: "v-list-item",
    value: "value",
    label: "title"
  });

  select: SelectCI = creator<SelectCI>({
    name: "v-select",
    modelValue: "modelValue",
    clearable: "clearable",
    filterable: "filter",
    buildMultiBinding(multiple) {
      return { multiple };
    }
  });

  radio: RadioCI = creator<RadioCI>({
    name: "v-radio",
    value: "value",
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          [this.value]: opts.value
        }
      });
    }
  });

  radioButton: RadioButtonCI = creator<RadioButtonCI>({
    name: "v-btn",
    value: "value",
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          [this.value]: opts.value
        }
      });
    }
  });

  radioGroup: RadioGroupCI = creator<RadioGroupCI>({
    name: "v-radio-group",
    modelValue: "modelValue"
  });

  form: FormCI = creator<FormCI>({
    name: "v-form",
    validateWrap: async (formRef) => {
      return formRef.validate();
    },
    transformValidateErrors: (e: any) => {
      const errors: any = {};
      _.forEach(e, (_item, key) => {
        errors[key] = true;
      });
      return errors;
    },
    inlineLayout: undefined
  });

  button: ButtonCI = creator<ButtonCI>({
    name: "v-btn",
    textType: { text: true },
    linkType: { text: true },
    circle: { fab: true },
    colors: (type) => {
      return { color: type };
    }
  });

  pagination: PaginationCI = creator<PaginationCI>({
    name: "v-pagination",
    currentPage: "modelValue",
    total: "length",
    pageCount: "totalVisible",
    onChange({ setCurrentPage, setPageSize, doAfterChange }) {
      return {
        "onUpdate:modelValue"(event: any) {
          setCurrentPage(event);
          doAfterChange();
        }
      };
    }
  });

  tableColumn: TableColumnCI = creator<TableColumnCI>({
    name: "v-data-table-column",
    label: "title",
    prop: "key",
    row: "item",
    index: "index"
  });

  table: TableCI = creator<TableCI>({
    name: "v-data-table",
    data: "items",
    renderMode: "slot",
    defaultRowKey: "id",
    fixedHeaderNeedComputeBodyHeight: false,
    buildMaxHeight: (maxHeight) => {
      return { height: maxHeight };
    },
    hasMaxHeight: (options) => {
      return options?.maxHeight != null;
    },
    headerDomSelector: "",
    vLoading: "loading",
    setSelectedRows({ multiple, selectedRowKeys, tableRef, getRowKey }) {
      console.warn("setSelectedRows not implemented for Vuetify");
    },
    buildSelectionCrudOptions(req) {
      console.warn("buildSelectionCrudOptions not implemented for Vuetify");
      return {};
    },
    rebuildRenderScope: (scope) => {
      return scope;
    },
    scrollTo(req: TableScrollReq) {
      console.warn("scrollTo not implemented for Vuetify");
    },
    onChange({ onSortChange, onFilterChange, bubbleUp }) {
      return {
        "onUpdate:options": (ctx: any) => {
          if (onSortChange && ctx.sortBy) {
            onSortChange({
              isServerSort: true,
              prop: ctx.sortBy[0].key,
              order: ctx.sortBy[0].order,
              asc: ctx.sortBy[0].order === "asc"
            });
          }
          if (onFilterChange) {
            onFilterChange(ctx.filter);
          }
          bubbleUp((events: any) => {
            if (events.onSortChange) {
              events.onSortChange(ctx);
            }
            if (events.onFilterChange) {
              events.onFilterChange(ctx.filter);
            }
          });
        }
      };
    }
  });

  textArea: TextAreaCI = creator<TextAreaCI>({
    name: "v-textarea",
    modelValue: "modelValue",
    clearable: "clearable",
    type: ""
  });

  tag: TagCI = creator<TagCI>({
    name: "v-chip",
    type: "color",
    colors: ["info", "success", "warning", "error"]
  });

  inputGroup: InputGroupCI = creator<InputGroupCI>({
    name: "v-input"
  });

  input: InputCI = creator<InputCI>({
    name: "v-text-field",
    clearable: "clearable",
    modelValue: "modelValue"
  });

  inputPassword: InputPasswordCI = creator<InputPasswordCI>({
    name: "v-text-field",
    clearable: "clearable",
    modelValue: "modelValue",
    passwordType: { type: "password" }
  });

  number: InputNumberCI = creator<InputNumberCI>({
    name: "v-text-field",
    modelValue: "modelValue",
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          type: "number"
        }
      });
    }
  });

  datePicker: DatePickerCI = creator<DatePickerCI>({
    name: "v-date-picker",
    modelValue: "modelValue",
    buildDateType(type) {
      return { name: "v-date-picker", type };
    }
  });

  timePicker: TimePickerCI = creator<TimePickerCI>({
    name: "v-time-picker",
    modelValue: "modelValue"
  });

  dropdown: DropdownCI = creator<DropdownCI>({
    name: "v-menu",
    command(callback) {
      return {
        onInput($event: any) {
          callback($event);
        }
      };
    },
    slotName: "activator",
    renderMode: "slot"
  });

  dropdownMenu: DropdownMenuCI = creator<DropdownMenuCI>({
    name: "v-list",
    command: () => {
      return {};
    }
  });

  dropdownItem: DropdownItemCI = creator<DropdownItemCI>({
    name: "v-list-item",
    command: "value"
  });

  imageGroup: ImageGroupCI = creator<ImageGroupCI>({
    name: "v-row"
  });

  image: ImageCI = creator<ImageCI>({
    name: "v-img",
    buildPreviewBind: ({ url, urls, previewUrl, previewUrls, index }) => {
      console.warn("Image preview not directly supported in Vuetify");
      return {};
    },
    fallback: "error-src"
  });

  progress: ProgressCI = creator<ProgressCI>({
    name: "v-progress-linear"
  });

  loading: LoadingCI = creator<LoadingCI>({
    name: "v-progress-circular",
    type: "component"
  });
  upload: UploadCI = creator<UploadCI>({
    id: "id",
    name: "v-file-input",
    type: "",
    typeImageCard: "image",
    typeImage: "image",
    getStatusFromEvent(event) {
      console.warn("Upload status not directly supported in Vuetify");
      return "";
    },
    getFileListFromEvent(response: any, file: any, fileList: any) {
      return fileList;
    },
    status: {
      success: "success",
      uploading: "uploading"
    },
    isSuccess(fileItem) {
      console.warn("Upload success status not directly supported in Vuetify");
      return false;
    },
    limitAdd: 1
  });

  tabs: TabsCI = creator<TabsCI>({
    name: "v-tabs",
    modelValue: "modelValue"
  });

  tabPane: TabPaneCI = creator<TabPaneCI>({
    name: "v-tab",
    key: "value",
    tab: "title"
  });

  collapse: CollapseCI = creator<CollapseCI>({
    name: "v-expansion-panels",
    modelValue: "modelValue",
    keyName: "value"
  });

  collapseItem: CollapseItemCI = creator<CollapseItemCI>({
    name: "v-expansion-panel",
    key: "value",
    titleSlotName: "header",
    extraSlotName: "actions",
    builder(opts) {
      return buildBinding(this, opts, {
        slots: {
          [this.titleSlotName]() {
            return (
              <div class={"d-flex justify-space-between align-center"}>
                <span>{opts.titleSlot()} </span>
                <span>{opts.extraSlot()}</span>
              </div>
            );
          }
        }
      });
    }
  });

  badge: BadgeCI = creator<BadgeCI>({
    name: "v-badge",
    value: "content",
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          [this.value]: opts.value
        }
      });
    }
  });

  tooltip: TooltipCI = creator<TooltipCI>({
    name: "v-tooltip",
    content: "text",
    trigger: "activator"
  });

  divider: DividerCI = creator<DividerCI>({
    name: "v-divider"
  });

  popover: PopoverCI = creator<PopoverCI>({
    name: "v-menu",
    contentSlotName: "default",
    triggerSlotName: "activator",
    visible: "modelValue"
  });

  // Additional Vuetify-specific components and configurations can be added here
}
