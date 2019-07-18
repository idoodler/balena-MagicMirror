# balena-MagicMirror
This projects combines the [MagicMirror²](https://github.com/MichMich/MagicMirror) project with the [balenaCloud](balena-cloud.com) platform. It drastically improves management of multiple MagicMirror² devices.

# Requirements
+ Free Balena Cloud Account (Depending on how many devices you want to manage)

# How to setup
+ Clone this repository to your local PC
+ Initialize submodules
    + execute **`git submodule update --init --recursive`**
    
## Add your config.js
The **`config.js`** file defines the content of your MagicMirror. Modify the existing **`config.js`** file in **`MagicMirror/config`** as you like.

## Mandatory fleet configuration
You need to set the GPU memory to something suitable for hardware accelerated graphics. You can set only one of the following if you know how much RAM your Pi has or you can set all of them and your Pi will autoselect based on its memory.
> Checkout the [balena-wpe](https://github.com/balena-io-projects/balena-wpe) project for more information, it is used to display the MagicMirror² interface

| Key                                 | Value
|-------------------------------------|----------
|**`RESIN_HOST_CONFIG_gpu_mem_256`**  | **`128`**
|**`RESIN_HOST_CONFIG_gpu_mem_512`**  | **`196`**
|**`RESIN_HOST_CONFIG_gpu_mem_1024`** | **`396`**

## Add modules
Modules must be placed in **`MagicMirror/modules`**. You can use git submodules or just copy the module into this directory. 

# Upload to your project
+ Install the [**`balena`** CLI tools](https://github.com/balena-io/balena-cli) and push to your project
    + **`balena push MY_PROJECT`**

# Additional Configuration
## Timezone
In Balena Cloud add an enviroment variable named **`TZ`**, as a value add your timezone according to [this documentation](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html#TZ-Variable)
> The enviromental variable can either be added to the whole fleet, or just to an individual device
## Rotating Display
Add **`RESIN_HOST_CONFIG_display_rotate`** as a custom configuration variable, note the values below.

| Descroption  | Value
|--------------|----------
|**`Normal`**  | **`0`**
|**`90°`**     | **`1`**
|**`180°`**    | **`2`**
|**`270°`**    | **`3`**

# Known issues
+ [x] Unstable MagicMirror service (restarting every now and then)
+ [ ] Browser starting before the MagicMirror service has been started resulting in a white screen on rare occasions
  + **Workaround:** Just restart the **`Browser`** service when this happens