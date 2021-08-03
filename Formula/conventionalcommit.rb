class Conventionalcommit < Formula
    desc "This is minimal cli that will help you use conventional commit in your project"
    homepage "https://github.com/pshaddel/homebrew-conventionalcommit"
    url "https://github.com/pshaddel/homebrew-conventionalcommit/releases/download/v1.0.0-alpha/conventionalcommit-macos-x64.tar.gz"
    sha256 "9f8531877fe4c8b562f06291cee62a0794b8f45aec3cc324daf796ac92759f66"
    version "1.0.0"
    def install
      bin.install "conventionalcommit"
    end
  end