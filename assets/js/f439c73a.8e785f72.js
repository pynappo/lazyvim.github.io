"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),o=t(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(7462),o=t(7294),l=t(6010),r=t(2466),s=t(6550),i=t(1980),u=t(7392),p=t(12);function m(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function c(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=c(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,u]=g({queryString:t,groupId:a}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=i??m;return d({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var f=t(2389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==s&&(m(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:c},r,{className:(0,l.Z)("tabs__item",k,r?.className,{"tabs__item--active":s===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=v(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",b)},o.createElement(y,(0,a.Z)({},e,n)),o.createElement(h,(0,a.Z)({},e,n)))}function _(e){const n=(0,f.Z)();return o.createElement(T,(0,a.Z)({key:String(n)},e))}},6947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=t(7462),o=(t(7294),t(3905)),l=t(4866),r=t(5162);const s={},i="Go",u={unversionedId:"extras/lang/go",id:"extras/lang/go",title:"Go",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/go.md",sourceDirName:"extras/lang",slug:"/extras/lang/go",permalink:"/extras/lang/go",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/extras/lang/elixir"},next:{title:"lang.java",permalink:"/extras/lang/java"}},p={},m=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"mason.nvim",id:"masonnvim-1",level:2},{value:"mason.nvim",id:"masonnvim-2",level:2},{value:"nvim-dap-go",id:"nvim-dap-go",level:2},{value:"neotest-go",id:"neotest-go",level:2},{value:"none-ls.nvim <em>(optional)</em>",id:"none-lsnvim-optional",level:2},{value:"conform.nvim <em>(optional)</em>",id:"conformnvim-optional",level:2},{value:"nvim-dap <em>(optional)</em>",id:"nvim-dap-optional",level:2},{value:"neotest <em>(optional)</em>",id:"neotest-optional",level:2}],c={toc:m};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go"},"Go"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,o.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Alternatively, you can add it to your ",(0,o.kt)("code",null,"lazy.nvim")," imports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.go" },\n    { import = "plugins" },\n  },\n})\n'))),(0,o.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,o.kt)("h2",{id:"nvim-treesitter"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  vim.list_extend(opts.ensure_installed, {\n    "go",\n    "gomod",\n    "gowork",\n    "gosum",\n  })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    vim.list_extend(opts.ensure_installed, {\n      "go",\n      "gomod",\n      "gowork",\n      "gosum",\n    })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"nvim-lspconfig"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  servers = {\n    gopls = {\n      keys = {\n        -- Workaround for the lack of a DAP strategy in neotest-go: https://github.com/nvim-neotest/neotest-go/issues/12\n        { "<leader>td", "<cmd>lua require(\'dap-go\').debug_test()<CR>", desc = "Debug Nearest (Go)" },\n      },\n      settings = {\n        gopls = {\n          gofumpt = true,\n          codelenses = {\n            gc_details = false,\n            generate = true,\n            regenerate_cgo = true,\n            run_govulncheck = true,\n            test = true,\n            tidy = true,\n            upgrade_dependency = true,\n            vendor = true,\n          },\n          hints = {\n            assignVariableTypes = true,\n            compositeLiteralFields = true,\n            compositeLiteralTypes = true,\n            constantValues = true,\n            functionTypeParameters = true,\n            parameterNames = true,\n            rangeVariableTypes = true,\n          },\n          analyses = {\n            fieldalignment = true,\n            nilness = true,\n            unusedparams = true,\n            unusedwrite = true,\n            useany = true,\n          },\n          usePlaceholders = true,\n          completeUnimported = true,\n          staticcheck = true,\n          directoryFilters = { "-.git", "-.vscode", "-.idea", "-.vscode-test", "-node_modules" },\n          semanticTokens = true,\n        },\n      },\n    },\n  },\n  setup = {\n    gopls = function(_, opts)\n      -- workaround for gopls not supporting semanticTokensProvider\n      -- https://github.com/golang/go/issues/54531#issuecomment-1464982242\n      require("lazyvim.util").lsp.on_attach(function(client, _)\n        if client.name == "gopls" then\n          if not client.server_capabilities.semanticTokensProvider then\n            local semantic = client.config.capabilities.textDocument.semanticTokens\n            client.server_capabilities.semanticTokensProvider = {\n              full = true,\n              legend = {\n                tokenTypes = semantic.tokenTypes,\n                tokenModifiers = semantic.tokenModifiers,\n              },\n              range = true,\n            }\n          end\n        end\n      end)\n      -- end workaround\n    end,\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    servers = {\n      gopls = {\n        keys = {\n          -- Workaround for the lack of a DAP strategy in neotest-go: https://github.com/nvim-neotest/neotest-go/issues/12\n          { "<leader>td", "<cmd>lua require(\'dap-go\').debug_test()<CR>", desc = "Debug Nearest (Go)" },\n        },\n        settings = {\n          gopls = {\n            gofumpt = true,\n            codelenses = {\n              gc_details = false,\n              generate = true,\n              regenerate_cgo = true,\n              run_govulncheck = true,\n              test = true,\n              tidy = true,\n              upgrade_dependency = true,\n              vendor = true,\n            },\n            hints = {\n              assignVariableTypes = true,\n              compositeLiteralFields = true,\n              compositeLiteralTypes = true,\n              constantValues = true,\n              functionTypeParameters = true,\n              parameterNames = true,\n              rangeVariableTypes = true,\n            },\n            analyses = {\n              fieldalignment = true,\n              nilness = true,\n              unusedparams = true,\n              unusedwrite = true,\n              useany = true,\n            },\n            usePlaceholders = true,\n            completeUnimported = true,\n            staticcheck = true,\n            directoryFilters = { "-.git", "-.vscode", "-.idea", "-.vscode-test", "-node_modules" },\n            semanticTokens = true,\n          },\n        },\n      },\n    },\n    setup = {\n      gopls = function(_, opts)\n        -- workaround for gopls not supporting semanticTokensProvider\n        -- https://github.com/golang/go/issues/54531#issuecomment-1464982242\n        require("lazyvim.util").lsp.on_attach(function(client, _)\n          if client.name == "gopls" then\n            if not client.server_capabilities.semanticTokensProvider then\n              local semantic = client.config.capabilities.textDocument.semanticTokens\n              client.server_capabilities.semanticTokensProvider = {\n                full = true,\n                legend = {\n                  tokenTypes = semantic.tokenTypes,\n                  tokenModifiers = semantic.tokenModifiers,\n                },\n                range = true,\n              }\n            end\n          end\n        end)\n        -- end workaround\n      end,\n    },\n  },\n}\n')))),(0,o.kt)("h2",{id:"masonnvim"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,o.kt)("p",null," Ensure Go tools are installed"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "goimports", "gofumpt" })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "goimports", "gofumpt" })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"masonnvim-1"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "gomodifytags", "impl" })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "gomodifytags", "impl" })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"masonnvim-2"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "delve" })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "delve" })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"nvim-dap-go"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/leoluz/nvim-dap-go"},"nvim-dap-go")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "leoluz/nvim-dap-go",\n  config = true,\n}\n')))),(0,o.kt)("h2",{id:"neotest-go"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neotest/neotest-go"},"neotest-go")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neotest/neotest-go",\n}\n')))),(0,o.kt)("h2",{id:"none-lsnvim-optional"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nvimtools/none-ls.nvim"},"none-ls.nvim")," ",(0,o.kt)("em",{parentName:"h2"},"(optional)")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local nls = require("null-ls")\n  opts.sources = vim.list_extend(opts.sources or {}, {\n    nls.builtins.code_actions.gomodifytags,\n    nls.builtins.code_actions.impl,\n    nls.builtins.formatting.goimports,\n    nls.builtins.formatting.gofumpt,\n  })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimtools/none-ls.nvim",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        vim.list_extend(opts.ensure_installed, { "gomodifytags", "impl" })\n      end,\n    },\n  },\n  opts = function(_, opts)\n    local nls = require("null-ls")\n    opts.sources = vim.list_extend(opts.sources or {}, {\n      nls.builtins.code_actions.gomodifytags,\n      nls.builtins.code_actions.impl,\n      nls.builtins.formatting.goimports,\n      nls.builtins.formatting.gofumpt,\n    })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"conformnvim-optional"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/conform.nvim"},"conform.nvim")," ",(0,o.kt)("em",{parentName:"h2"},"(optional)")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  formatters_by_ft = {\n    go = { "goimports", "gofumpt" },\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/conform.nvim",\n  optional = true,\n  opts = {\n    formatters_by_ft = {\n      go = { "goimports", "gofumpt" },\n    },\n  },\n}\n')))),(0,o.kt)("h2",{id:"nvim-dap-optional"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")," ",(0,o.kt)("em",{parentName:"h2"},"(optional)")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        vim.list_extend(opts.ensure_installed, { "delve" })\n      end,\n    },\n    {\n      "leoluz/nvim-dap-go",\n      config = true,\n    },\n  },\n}\n')))),(0,o.kt)("h2",{id:"neotest-optional"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neotest/neotest"},"neotest")," ",(0,o.kt)("em",{parentName:"h2"},"(optional)")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  adapters = {\n    ["neotest-go"] = {\n      -- Here we can set options for neotest-go, e.g.\n      -- args = { "-tags=integration" }\n    },\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neotest/neotest",\n  optional = true,\n  dependencies = {\n    "nvim-neotest/neotest-go",\n  },\n  opts = {\n    adapters = {\n      ["neotest-go"] = {\n        -- Here we can set options for neotest-go, e.g.\n        -- args = { "-tags=integration" }\n      },\n    },\n  },\n}\n')))))}d.isMDXComponent=!0}}]);