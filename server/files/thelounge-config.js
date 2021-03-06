"use strict";

module.exports = {
  // ## Server settings

  // ### `public`
  //
  // When set to `true`, The Lounge starts in public mode. When set to `false`,
  // it starts in private mode.
  //
  // - A **public server** does not require authentication. Anyone can connect
  //   to IRC networks in this mode. All IRC connections and channel
  //   scrollbacks are lost when a user leaves the client.
  // - A **private server** requires users to log in. Their IRC connections are
  //   kept even when they are not using or logged in to the client. All joined
  //   channels and scrollbacks are available when they come back.
  //
  // This value is set to `false` by default.
  public: false,

  // ### `host`
  //
  // IP address or hostname for the web server to listen to. For example, set it
  // to `"127.0.0.1"` to accept connections from localhost only.
  //
  // For UNIX domain sockets, use `"unix:/absolute/path/to/file.sock"`.
  //
  // This value is set to `undefined` by default to listen on all interfaces.
  host: undefined,

  // ### `port`
  //
  // Set the port to listen to.
  //
  // This value is set to `9000` by default.
  port: 9000,

  // ### `bind`
  //
  // Set the local IP to bind to for outgoing connections.
  //
  // This value is set to `undefined` by default to let the operating system
  // pick its preferred one.
  bind: undefined,

  // ### `reverseProxy`
  //
  // When set to `true`, The Lounge is marked as served behind a reverse proxy
  // and will honor the `X-Forwarded-For` header.
  //
  // This value is set to `false` by default.
  reverseProxy: true,

  // ### `maxHistory`
  //
  // Defines the maximum number of history lines that will be kept in memory per
  // channel/query, in order to reduce the memory usage of the server. Setting
  // this to `-1` will keep unlimited amount.
  //
  // This value is set to `10000` by default.
  maxHistory: 5000,

  // ### `https`
  //
  // These settings are used to run The Lounge's web server using encrypted TLS.
  //
  // If you want more control over the webserver,
  // [use a reverse proxy instead](https://thelounge.chat/docs/guides/reverse-proxies).
  //
  // The available keys for the `https` object are:
  //
  // - `enable`: when set to `false`, HTTPS support is disabled
  //    and all other values are ignored.
  // - `key`: Path to the private key file.
  // - `certificate`: Path to the certificate.
  // - `ca`: Path to the CA bundle.
  //
  // The value of `enable` is set to `false` to disable HTTPS by default, in
  // which case the other two string settings are ignored.
  https: {
    enable: false,
    key: "",
    certificate: "",
    ca: ""
  },

  // ## Client settings

  // ### `theme`
  //
  // Set the default theme to serve to new users. They will be able to select a
  // different one in their client settings among those available.
  //
  // The Lounge ships with two themes (`default` and `morning`) and can be
  // extended by installing more themes. Read more about how to manage them
  // [here](https://thelounge.chat/docs/guides/theme-creation).
  //
  // This value needs to be the package name and not the display name. For
  // example, the value for Morning would be `morning`, and the value for
  // Solarized would be `thelounge-theme-solarized`.
  //
  // This value is set to `"default"` by default.
  theme: "morning",

  // ### `prefetch`
  //
  // When set to `true`, The Lounge will load thumbnails and site descriptions
  // from URLs posted in channels and private messages.
  //
  // This value is set to `false` by default.
  prefetch: true,

  // ### `prefetchStorage`

  // When set to `true`, The Lounge will store and proxy prefetched images and
  // thumbnails on the filesystem rather than directly display the content at
  // the original URLs.
  //
  // This improves security and privacy by not exposing the client IP address,
  // always loading images from The Lounge and making all assets secure, which
  // resolves mixed content warnings.
  //
  // If storage is enabled, The Lounge will fetch and store images and thumbnails
  // in the `${THELOUNGE_HOME}/storage` folder.
  //
  // Images are deleted when they are no longer referenced by any message
  // (controlled by `maxHistory`), and the folder is cleaned up when The Lounge
  // restarts.
  //
  // This value is set to `false` by default.
  prefetchStorage: false,

  // ### `prefetchMaxImageSize`
  //
  // When `prefetch` is enabled, images will only be displayed if their file
  // size does not exceed this limit.
  //
  // This value is set to `2048` kilobytes by default.
  prefetchMaxImageSize: 2048,

  // ### `fileUpload`
  //
  // Allow uploading files to the server hosting The Lounge.
  //
  // Files are stored in the `${THELOUNGE_HOME}/uploads` folder, do not expire,
  // and are not removed by The Lounge. This may cause issues depending on your
  // hardware, for example in terms of disk usage.
  //
  // The available keys for the `fileUpload` object are:
  //
  // - `enable`: When set to `true`, files can be uploaded on the client with a
  //   drag-and-drop or using the upload dialog.
  // - `maxFileSize`: When file upload is enabled, users sending files above
  //   this limit will be prompted with an error message in their browser. A value of
  //   `-1` disables the file size limit and allows files of any size. **Use at
  //   your own risk.** This value is set to `10240` kilobytes by default.
  fileUpload: {
    enable: false,
    maxFileSize: 10240
  },

  // ### `transports`
  //
  // Set `socket.io` transports.
  //
  // This value is set to `["polling", "websocket"]` by default.
  transports: ["polling", "websocket"],

  // ### `leaveMessage`
  //
  // Set users' default `quit` and `part` messages if they are not providing
  // one.
  //
  // This value is set to `"The Lounge - https://thelounge.chat"` by
  // default.
  leaveMessage: "💜",

  // ## Default network

  // ### `defaults`
  //
  // Specifies default network information that will be used as placeholder
  // values in the *Connect* window.
  //
  // The available keys for the `defaults` object are:
  //
  // - `name`: Name to display in the channel list of The Lounge. This value is
  //   not forwarded to the IRC network.
  // - `host`: IP address or hostname of the IRC server.
  // - `port`: Usually 6667 for unencrypted connections and 6697 for
  //   connections encrypted with TLS.
  // - `password`: Connection password. If the server supports SASL capability,
  //   then this password will be used in SASL authentication.
  // - `tls`: Enable TLS connections
  // - `rejectUnauthorized`: Whether the server certificate should be verified
  //   against the list of supplied Certificate Authorities (CAs) by your
  //   Node.js installation.
  // - `nick`: Nick name. Percent signs (`%`) will be replaced by random
  //   numbers from 0 to 9. For example, `Guest%%%` may become `Guest123`.
  // - `username`: User name.
  // - `realname`: Real name.
  // - `join`: Comma-separated list of channels to auto-join once connected.
  //
  // This value is set to connect to the official channel of The Lounge on
  // Freenode by default:
  //
  // ```js
  // defaults: {
  //   name: "Freenode",
  //   host: "chat.freenode.net",
  //   port: 6697,
  //   password: "",
  //   tls: true,
  //   rejectUnauthorized: true,
  //   nick: "thelounge%%",
  //   username: "thelounge",
  //   realname: "The Lounge User",
  //   join: "#thelounge"
  // }
  // ```
  defaults: {
    name: "Freenode",
    host: "chat.freenode.net",
    port: 6697,
    password: "",
    tls: true,
    rejectUnauthorized: true,
    nick: "thelounge%%",
    username: "thelounge",
    realname: "The Lounge User",
    join: "#thelounge"
  },

  // ### `displayNetwork`
  //
  // When set to `false`, network fields will not be shown in the "Connect"
  // window.
  //
  // Note that even though users cannot access and set these fields, they can
  // still connect to other networks using the `/connect` command. See the
  // `lockNetwork` setting to restrict users from connecting to other networks.
  //
  // This value is set to `true` by default.
  displayNetwork: true,

  // ### `lockNetwork`
  //
  // When set to `true`, users will not be able to modify host, port and TLS
  // settings and will be limited to the configured network.
  //
  // It is often useful to use it with `displayNetwork` when setting The
  // Lounge as a public web client for a specific IRC network.
  //
  // This value is set to `false` by default.
  lockNetwork: false,

  // ## User management

  // ### `messageStorage`

  // The Lounge can log user messages, for example to access them later or to
  // reload messages on server restart.

  // Set this array with one or multiple values to enable logging:
  // - `text`: Messages per network and channel will be stored as text files.
  //   **Messages will not be reloaded on restart.**
  // - `sqlite`: Messages are stored in SQLite database files, one per user.
  //
  // Logging can be disabled globally by setting this value to an empty array
  // `[]`. Logging is also controlled per user individually in the `log` key of
  // their JSON configuration file.
  //
  // This value is set to `["sqlite", "text"]` by default.
  messageStorage: ["sqlite"],

  // ### `useHexIp`
  //
  // When set to `true`, users' IP addresses will be encoded as hex.
  //
  // This is done to share the real user IP address with the server for host
  // masking purposes. This is encoded in the `username` field and only supports
  // IPv4.
  //
  // This value is set to `false` by default.
  useHexIp: true,
};
