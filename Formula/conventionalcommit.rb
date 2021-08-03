class Conventionalcommit < Formula
    desc "This is minimal cli that will help you use conventional commit in your project"
    homepage "https://github.com/pshaddel/homebrew-conventionalcommit"
    url "https://github.com/pshaddel/homebrew-conventionalcommit/releases/download/v1.0.0-alpha/conventionalcommit-macos-x64.tar.gz"
    sha256 "86d8874a66de9220f9cc03379f65e7805c2d2fce76a1b9646ba492cfd4065d3f"
    version "1.0.0"
    def install
      bin.install "conventional-commit"
    end
  end